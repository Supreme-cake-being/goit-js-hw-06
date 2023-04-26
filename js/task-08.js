const loginForm = document.querySelector(".login-form");

const emailInput = document.querySelector("[type=email]");
const passwordInput = document.querySelector("[type=password]");

const submitBtn = document.querySelector("button");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("NIGGERS");
    }

    const users = {
        [`${emailInput.getAttribute("name")}`]: email.value,
        [`${passwordInput.getAttribute("name")}`]: password.value
    }

    console.log(users);

    event.currentTarget.reset();
});
