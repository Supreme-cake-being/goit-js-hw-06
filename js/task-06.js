const inputText = document.querySelector("#validation-input");
const inputLength = parseInt(inputText.getAttribute('data-length'));

inputText.addEventListener("blur", (event) => {
    inputText.classList.remove("valid", "invalid");

    if (inputText.value.length !== inputLength)
        return inputText.classList.add("invalid");
        
    return inputText.classList.add("valid");
});

