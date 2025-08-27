const btnBig = document.getElementById("btnBig");
const btnNormal = document.getElementById("btnNormal");

//const textBlock = document.getElementsByClassName("text"); // ищем по имени класса
const textBlock = document.querySelectorAll(".text"); // селектор по тексту

btnBig.onclick = () => {
    textBlock.forEach (b => b.style.fontSize = "2em");
}
btnNormal.onclick = () => {
    textBlock.forEach (b => b.style.fontSize = "1em");
}
