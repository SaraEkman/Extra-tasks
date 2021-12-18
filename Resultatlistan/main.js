let players = [
    {
        name: "Sara",
        points: 0
    },
    {
        name: "Hellen",
        points: 0
    },
    {
        name: "Jack",
        points: 0
    },
    {
        name: "Ebba",
        points: 0
    }
];

let renderPointList = () => {
    players.sort((a,b)=>b.points-a.points)

    let divContainer = document.querySelector("div");
    divContainer.innerHTML= ""

    players.forEach(plyer => {

        console.log(plyer);
        let plyerName = document.createElement("h1");
        plyerName.innerText = plyer.name;
        plyerName.style.color = "grey";

        let pointText = document.createElement("h2");
        pointText.innerText = plyer.points;

        let plyerContainer = document.createElement("div");
        plyerContainer.style.margin = "50px";

        let plusAndMinCon = document.createElement("div");
        plusAndMinCon.style.display = "flex";
        plusAndMinCon.style.fontSize = "1.5rem";

        let minus = document.createElement("h3");
        minus.innerText = "-";
        minus.style.marginRight = "15px";
        minus.addEventListener("click", () => {
            pointText.innerText = plyer.points--;
            console.log(players);
            renderPointList();
        });

        let plus = document.createElement("h3");
        plus.innerText = "+";
        plus.addEventListener("click", () => {
            pointText.innerText = plyer.points++;
            console.log(players);
            renderPointList();
        });

        plusAndMinCon.append(minus, plus);

        plyerContainer.append(plyerName, pointText, plusAndMinCon);

        divContainer.appendChild(plyerContainer);
    });
};
renderPointList();

