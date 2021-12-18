const input = document.querySelector("input");
const button = document.querySelector("button")
const header = document.querySelector("h1");

button.addEventListener("click", () => 
    header.innerText = +input.value + 1)