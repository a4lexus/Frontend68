// тут может быть код JS 

/* 
    alert("hello from JS")
*/

console.log("привет Java Script!!!");
console.log(3+6);
console.log(7>10);
console.log("4" + 2); // 42 - для строки в js можно испльзовать разные галочки " ",  ' ' , ` `
console.log("4" - 2 -"88"); //  -86
console.log("4" - 2 + "8"); // 1) "4"-2 = 2   2) 2 + "8" = "28"

// Java:
// int a = 10;
// String str = "qwer";

//JS
// let   const    var (var - устаревшее и не рекомендуется!)
const myName ="Alexej";
//myName = "qwe";// ошибка, const нельзя переприсвоить

let a = 10;

console.log("a = " + a, typeof(a));
a = "hello!";
console.log("a = " + a, typeof(a));
a = 10 > 20;
console.log("a = " + a, typeof(a));
// console.log("b = " + b); // b не обьявлена ReferenceError: b is not defined

a = 5;
let b = 2;
//` ` форматированная строка
console.log(`a = ${a} b = ${b}`)
console.log(`a*b = ${a*b}`);
console.log(`a+b =${a+b}` );
console.log("a-b =", a-b);
console.log("a/b =", a/b); // не целочисленное деление!

console.log("a%b =", a%b);
console.log("a**b =", a**b);


a = "5"
if(a === 5){
    console.log(`a = 5 true`);
   } else{
     console.log(`a = 5 false`); 
}

for(let i=0; i<3; i++){
    console.log("finish");
}





