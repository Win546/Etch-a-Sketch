const body = document.getElementById("bodyGrid");
let bright = 100;
let numberSquare;

howManySquare();

function howManySquare() {
    numberSquare = prompt("how many square for side do you wnat?", 16)
    if (numberSquare > 100) {
        alert("Too many square")
        howManySquare();
    }
    else (
        drawGrid(numberSquare)
    )
}


function drawGrid(numberSquare) {
    let totNumberSquare = numberSquare * numberSquare;
    let size = 100 / numberSquare;
    let max = 255;
    let r = Math.floor(Math.random() * max);
    let g = Math.floor(Math.random() * max);
    let b = Math.floor(Math.random() * max);

    for (let i = 0; i < totNumberSquare; i++) {
        let squareDiv = document.createElement("div");


        let backgorundSquare = `rgb(${r}, ${g}, ${b})`

        squareDiv.style.backgroundColor = backgorundSquare;

        squareDiv.style.width = `${size}%`;
   

        squareDiv.style.filter = `brightness(${bright}%)`;
        squareDiv.addEventListener('mouseover', () => {
            squareDiv.classList.add("hover")
        });
        body.appendChild(squareDiv);

    }
    bright = bright > 0 ? bright - 10 : bright;
}


selectGrid.addEventListener("click", (e) => {
    body.innerHTML = "";
    howManySquare();

})