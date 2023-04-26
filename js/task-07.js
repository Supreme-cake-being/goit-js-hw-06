const fontSizeController = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
let fontSize = 0;

fontSizeController.addEventListener("input", (event) => spanText.style.fontSize = `${event.currentTarget.value}px`);