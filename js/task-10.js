function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const dataInput = document.querySelector("input");
const divBoxes = document.querySelector("#boxes");

let width = 30;
let height = 30;

createBtn.addEventListener("click", () => {
  for (let i = 0; i < dataInput.value; i += 1) {
    const divEl = document.createElement("div");

    divEl.classList.add("color-box");
    divEl.style.backgroundColor = `${getRandomHexColor()}`;
    divEl.style.width = `${width}px`;
    divEl.style.height = `${height}px`;
    
    divBoxes.append(divEl);

    width += 10;
    height += 10;
  }
});

destroyBtn.addEventListener("click", () => {
  // Потрібно для видалення усіх елементів в divBoxes
  const numberOfBoxes = divBoxes.querySelectorAll(".color-box").length;

  for (let i = 0; i < numberOfBoxes; i += 1) {
    const divColorBox = divBoxes.querySelector(".color-box");
    divColorBox.remove();
  }

  width = 30;
  height = 30;
});

