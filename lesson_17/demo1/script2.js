const btnBig = document.getElementById("btnBig");
const btnNormal = document.getElementById("btnNormal");

//const textBlock = document.getElementsByClassName("text"); // ищем по имени класса
const textBlock = document.querySelectorAll(".text"); // селектор по тексту

// el.className);// свойство class элемента (получить список классов в виде строки)
console.log(textBlock[0].classList);     // (получить список классов в виде списка)

/*
btnBig.onclick = () => {
    textBlock.forEach (b => b.classList.add("big"));
}
btnNormal.onclick = () => {
    textBlock.forEach (b => b.classList.remove ("big"));
}
    */

btnBig.addEventListener("click", () => {
    textBlock.forEach (b => b.classList.add("big"));

}
);
btnBig.addEventListener("click", () => {
    console.log("нажали на кнопку big .....");
}
);
btnNormal.onclick = () => {
    textBlock.forEach (b => b.classList.remove ("big"));
}