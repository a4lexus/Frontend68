const box = document.getElementById("box");
const btnUp = document.getElementById("btnUp");
const btnDown = document.getElementById("btnDown");
const btnRight = document.getElementById("btnRight");
const btnLeft = document.getElementById("btnLeft");
const boxSize = 135; // размер квадрата


document.getElementById("btnUp").addEventListener("click", () => {
  box.style.top = "30px";
  box.style.left = "30px";
});

btnDown.addEventListener("click", () => {
    box.style.top = (root.clientHeight - boxSize) + "px";
    box.style.left = "30px";
    box.style.bottom = "30px";
    
});

document.getElementById("btnRight").addEventListener("click", () => {
  box.style.top = "30px";
  box.style.left = (root.clientWidth - boxSize) + "px";
});

document.getElementById("btnLeft").addEventListener("click", () => {
  box.style.top = (root.clientHeight - boxSize) + "px";
  box.style.left = (root.clientWidth - boxSize) + "px";
});


