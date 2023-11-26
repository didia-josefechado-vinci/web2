const divRouge= document.querySelector(".red");
const divOrange= document.querySelector(".orange");
const divVert= document.querySelector(".green");

const colors = ['red', 'orange', 'green', 'orange'];
let currentIndex = 0;
var myIntervalId;

startClock();

function startClock() {
  myIntervalId = setInterval(changeColor, 2000);
}

function changeColor(){
  divRouge.style.backgroundColor = "white";
  divOrange.style.backgroundColor = "white";
  divVert.style.backgroundColor = "white";

  // Passez à la couleur suivante dans le tableau
  currentIndex = (currentIndex + 1) % colors.length;

  // Appliquez la nouvelle couleur
  if (colors[currentIndex] === "red") {
    divRouge.style.backgroundColor = "red";
  } else if (colors[currentIndex] === "orange") {
    divOrange.style.backgroundColor = "orange";
  } else if (colors[currentIndex] === "green") {
    divVert.style.backgroundColor = "green";
    
     if (currentIndex === colors.length - 1) {
      currentIndex = 0;
    }
  }
}


