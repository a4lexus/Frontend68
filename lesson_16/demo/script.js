let arr = [0,1,2,3,4,5];
console.log(arr);
let res = arr.splice(1,2);
console.log(arr);
console.log(res);

arr = [0,1,2,3,4,5];
res = arr.splice(1,2,"q1","q2","q3");
console.log(arr);

arr = [0,1,2,3,4,5];
res = arr.splice(3); // удаляет все элементы с позиции индекс 3 [0,1,2]
console.log(arr);
console.log(res); // то что удалили, можно таким образом разбить на части [3,4,5]

arr = [0,1,2,3,4,5];
res = arr.splice(-3,2);
console.log(arr);

console.log("------------------flat--------------------");

arr = [1,2,["a","b"]];
console.log(arr);
res = arr.flat();
console.log(res);

arr = [1,2,["a","b",["qw","qa","qe"]]];
console.log(arr);
res = arr.flat(3);
console.log(res);

/////
console.log("------------------flatMap (map + flat(1))--------------------");
arr = ["hello", "java script"];
res = arr.flatMap(str=> str.split(""));
console.log(arr);
console.log(res);

arr = "hello java script". split(" "); // получаем массив из слов с пробелами
console.log(arr);

arr = arr.map(el => el.split("")); // получаем массив из букв слов
console.log(arr);                   //

arr = arr.flat(1);                  //
console.log(arr);                   //flatMap()

