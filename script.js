let body=document.getElementById("body");
let mainDiv=document.createElement("div");

let squareDiv=document.createElement("div");

squareDiv.className = "square";


for(let i=0; i<16; i++){
mainDiv.appendChild(squareDiv);
console.loo(i)
}

body.appendChild(mainDiv);