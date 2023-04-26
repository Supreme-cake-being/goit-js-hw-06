const inputText = document.querySelector("#validation-input");
const inputLength = inputText.getAttribute("data-length");

inputText.addEventListener("blur", (event) => {
    inputText.classList.remove("valid", "invalid");

    if (event.currentTarget.value.length < inputLength)
        return inputText.classList.toggle("invalid");
        
    return inputText.classList.toggle("valid");
});