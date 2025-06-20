const body = document.getElementById("bodyGrid");
let opacity = 0.1;
let numberSquare;

howManySquare();

function howManySquare() {
    numberSquare = prompt("how many square for side do you wnat?", 16)
    if (numberSquare > 100) {
        alert("Too many square")
        howManySquare();
    } else if (Number.isInteger(numberSquare) ) {
         alert("That is not a integer")
    }
    else (
        drawGrid(numberSquare)
    )
}

function drawGrid(numberSquare) {
    const totNumberSquare = numberSquare * numberSquare;
    const size = 100 / numberSquare;
    const max = 255;
    const r = Math.floor(Math.random() * max);
    const g = Math.floor(Math.random() * max);
    const b = Math.floor(Math.random() * max);
    const backgorundSquare = `rgb(${r}, ${g}, ${b})`
    const squareDiv = document.createElement("div");
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < totNumberSquare; i++) {
        const cloned = squareDiv.cloneNode();
        cloned.style.backgroundColor = backgorundSquare;
        cloned.style.width = `${size}%`;
        // cloned.style.filter = `brightness(${bright}%)`; Too GPU INTENSIVE
             cloned.style.opacity = `${opacity}`; 
        fragment.appendChild(cloned);
    }
   
    body.appendChild(fragment);
    opacity = opacity < 0.9 ? opacity + 0.10 : opacity;
}


selectGrid.addEventListener("click", (e) => {
    body.innerHTML = "";
    howManySquare();
})

body.addEventListener('mouseover', (e) => {
    let hovered = e.target.tagName;
    switch (hovered) {
        case "DIV":
            e.target.classList.add("hover")
            break;
    }
});