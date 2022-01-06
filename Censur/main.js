const input = document.querySelector("input")
const button = document.querySelector("button")
const div = document.querySelector("div");
 
button.addEventListener("click", () => {
    const str = input.value
    const newStr = str.replace(/[aeiouyåäö]/ig, "*")
    div.innerText = newStr
})
