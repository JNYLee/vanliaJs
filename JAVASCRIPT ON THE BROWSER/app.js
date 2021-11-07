const title = document.querySelector("div.hello:first-child h1");


// title.style.color = "blue";

function handleTitleClick() {
    console.log("title was clicked!");
    title.style.color = "blue";

}

title.addEventListener("click", handleTitleClick);

