const input = document.querySelector("input");
const button = document.querySelector("button")
const header = document.querySelector("h1");

function secondNum(num) {
    let nextNum = Number(num) + 1
    header.innerText = nextNum
}

button.addEventListener("click", () => {
    const inputValue = input.value
    secondNum(inputValue)
})