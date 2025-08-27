let block = document.getElementById("block");
let offset = 0;

for (let i=0; i<200; i++){
    move();
}

const interval = setInterval(move, 30); // устанавливаем интервал в 30 мс

function move() {
    offset++;
    block.style.top = offset + "px";
    if (offset >= 450) {
        clearInterval(interval); // удаляем интервал
        block.remove(); // удаляем блок
    }
}