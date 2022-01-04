const div = document.querySelector("div");

let countDown = new Date("sep 06, 2023 17:00:00")
console.log(countDown);

const timeOut = setInterval(() => {
    div.innerHTML = ""
    const currentDate = new Date().getTime()
    const time = countDown - currentDate

    let d = Math.floor(time / (1000 * 60 * 60 * 24));
    let h = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((time % (1000 * 60)) / 1000);

    div.insertAdjacentHTML("afterbegin", `
    <h1>Så mycket tid tills utbildningen är slut 😒</h1>
    <h2>${d} Dagar ${h} Timmar ${m} inuter ${s} Sekunder</h2>
    `)

    if (time < 0) {
        clearInterval(timeOut)
        div.innerText = `Äntligen slut 😁`
    }

}, 1000) 