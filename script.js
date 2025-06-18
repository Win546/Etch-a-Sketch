let body = document.getElementById("body");


let squareDiv = document.createElement("div");

squareDiv.className = "square";


for (let i = 0; i < 16; i++) {
    body.appendChild(squareDiv.cloneNode(1));

}

document.addEventListener("mouseover", (e) => {
    let hovered = e.target.classList[0];

    switch (hovered) {
        case "square":
            e.target.classList.toggle("hover")

            break;
    }
})

document.addEventListener("mouseout", (e) => {
    let hovered = e.target.classList[1];

    switch (hovered) {
        case "hover":
            e.target.classList.toggle("hover")

            break;
    }
})