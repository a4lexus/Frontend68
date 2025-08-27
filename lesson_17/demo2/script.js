// события мышки

let root = document.getElementById("root");
let root1 = document.getElementById("root1");

root.addEventListener("click", () => console.log("кликнули мышью"));
root.addEventListener("click", (е) => console.log(е));
root.addEventListener("click", (е) => е.target.style.background= "red");


//root1.addEventListener("click", () => console.log("кликнули мышью на блок 1"));