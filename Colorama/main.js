let color = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgrey", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgrey", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"];

// const form = document.querySelector("form")

// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     for (let i = 0; i < color.length; i++){
//         console.log(color[i]);
//         let oneColor = color[i]
//         let inputVal = document.querySelector("input").value

//         if (oneColor === inputVal) {
//             document.body.style.backgroundColor = `${oneColor}`
//         } else {
//             document.body.innerText = "Fel Angiven färge namn"
//         }
//     }
// })

const input = document.querySelector("input");
const button = document.querySelector("button");
const header = document.querySelector("h1");
const ul = document.querySelector("ul");

input.addEventListener("input",(e)=> {
    console.log(e.data);

    color.forEach(oneCol => {
        
        
    })
})




button.addEventListener("click", () => {

    for (let i = 0; i < color.length; i++) {
        console.log(color[i]);
        let oneColor = color[i];

        

        let inputVal = input.value;

        if (oneColor === inputVal) {
            header.innerText = "Rätt färg 😊";
            let output = document.body.style.backgroundColor = `${oneColor}`;
            return output;

        } else {
            header.innerText = "Fel Försök igen";
        }
    }
});

color.forEach(oneCol => {
    let li = document.createElement("li");
    li.innerText = oneCol;
    ul.appendChild(li);
})
ul.style.width = "60vw"
ul.style.height = "50vh"
ul.style.overflowY = "scroll"