const logInInput = document.querySelector("#login-form input");
const logInButton = document.querySelector("#login-form button");

function onLogInBtnClick() {
    console.log("hello", logInInput.value);
}

logInButton.addEventListener("click", onLogInBtnClick);