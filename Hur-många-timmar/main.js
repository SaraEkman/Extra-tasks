console.log("hej");
let input = document.getElementById("input");
let btn = document.getElementById("button");
let result = document.getElementById("result");

btn.addEventListener("click", () => {
    let sum = input.value * 365 * 24;
    result.innerHTML = "<br>" + input.value + " år = " + sum + " timmar";
});