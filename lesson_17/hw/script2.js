let block = document.getElementById("block");
let offset = 0;

requestAnimationFrame(move);


function move() {
    offset++;
    
    if (offset >= 450) {
        block.remove();
        return;
       
    }
    block.style.top = offset + "px";
    requestAnimationFrame(move);
}