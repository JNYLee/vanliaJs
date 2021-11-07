const title = document.querySelector("div.hello:first-child h1");


// title.style.color = "blue";

function handleTitleClick() {
    console.log("title was clicked!");
    title.style.color = "blue";

}

function handleMouseEnter() {
    title.innerHTML = "Mouse is here!"

}

function handleMouseLeave() {
    title.innerHTML = "Mouse is gone!"

}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

