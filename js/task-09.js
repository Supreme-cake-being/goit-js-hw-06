function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector("button");
const colorCode = document.querySelector(".color");
const bodyBgc = document.querySelector("body");

changeColorBtn.addEventListener("click", () => {
  colorCode.textContent = `${getRandomHexColor()}`;
  bodyBgc.style.backgroundColor = `${getRandomHexColor()}`;
});


