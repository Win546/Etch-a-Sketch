let body = document.getElementById("body");


let squareDiv = document.createElement("div");

squareDiv.className = "square";



let numberSquare;
howManySquare();

function howManySquare() {
   numberSquare=prompt("how many square do you want?", 16)
 
  if (numberSquare > 100) {
    alert("Too many square")
    howManySquare();
  } else if(numberSquare < 4){
      alert("Too less square")
    howManySquare();
  } else (drawGrid(numberSquare))

}



function drawGrid(numberSquare){
for (let i = 0; i < numberSquare; i++) {
    body.appendChild(squareDiv.cloneNode(1));

}
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
 body.innerHTML="";
howManySquare();

})