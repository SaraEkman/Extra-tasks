const div = document.querySelector("div");

(function countLegs(rooster, dog, pig, cat) {
    let result = (rooster * 2) + (dog * 4) + (pig * 4) + (cat * 4)
    div.innerText = result
})(8, 1, 4, 2)