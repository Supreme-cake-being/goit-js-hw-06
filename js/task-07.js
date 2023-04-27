const fontSizeController = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

spanText.style.fontSize = `${fontSizeController.value}px`;

fontSizeController.addEventListener("input", (event) => spanText.style.fontSize = `${event.currentTarget.value}px`);


