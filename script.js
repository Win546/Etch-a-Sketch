let body=document.getElementById("body");


let squareDiv=document.createElement("div");

squareDiv.className = "square";


for(let i=0; i<16; i++){
body.appendChild(squareDiv.cloneNode(1));

}
