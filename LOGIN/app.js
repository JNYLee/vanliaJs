const logInInForm = document.querySelector("#login-form");
const logInInput = document.querySelector("#login-form input");

const link = document.querySelector("a");
function onLogInSubmit(event) {
    event.preventDefault();
    const username = logInInput.value;
    console.log(username);
}

function handleLinkClick (event) {
    event.preventDefault()
    console.log(event);
    alert("Clicked!");
}

logInInForm.addEventListener("submit", onLogInSubmit);
link.addEventListener("click", handleLinkClick);