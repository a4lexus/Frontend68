


function getTimeString(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log(hour,min,sec);
    return `${twodigit(hour)}:${twodigit(min)}:${twodigit(sec)}`;
}

function setClock (){
    let clock = document.getElementById(`clock`);
    clock.innerText = getTimeString();
    //console.dir(clock);
}

function twodigit(value){
    return String(value).padStart(2,"0"); // если в конце одна цифра, подставляет перед ней ноль!
    //return value<10? "0" + value:value;
    //return ("0" + value).slice(-2);

}

setInterval(setClock,1000);

//getTimeString();
//setClock();