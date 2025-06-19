let body = document.getElementById("bodyGrid");

let backgorundSquare = "rgb(255, 255, 30)"

let bright = 100;

let squareDiv = document.createElement("div");

squareDiv.className = "square";

squareDiv.style.backgroundColor = backgorundSquare;

let numberSquare;
howManySquare();

function howManySquare() {
    numberSquare = prompt("how many square for side do you wnat?", 16)

    if (numberSquare > 100) {
        alert("Too many square")
        howManySquare();
    } else if (numberSquare < 4) {
        alert("Too less square")
        howManySquare();
    } else (drawGrid(numberSquare))

}



function drawGrid(numberSquare) {
    let totNumberSquare = numberSquare * numberSquare;
    let width = 720 / numberSquare;
    let height = 720 / numberSquare

    squareDiv.style.width = width + "px";
    squareDiv.style.height = height + "px";

    squareDiv.style.filter = "brightness(" + bright + "%)";
    for (let i = 0; i < totNumberSquare; i++) {
        body.appendChild(squareDiv.cloneNode(1));

    }
    bright = bright - 10;
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


selectGrid.addEventListener("click", (e) => {
    body.innerHTML = "";
    howManySquare();

})