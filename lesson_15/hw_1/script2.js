/*
Немного усложним задачу.
Создайте массив, но в этот раз в массиве будут числа и 
строки и массивы с числами и строками. Ваша задача написать функцию, которыя 
создаст новый массив в который поместит все строки из исходного массива
и строки из всех массивов входящих в исходный.
*/
const array = [6,9,"str1",9];
const arr = [1, "hello", 9, "145",[54, "Anna","Lena"], "Mike", array,  74.9, "qwe",];
console.log(arr);

console.log(getStrings(arr));

function getStrings(array){
    if(!Array.isArray(array)){
        return "Error!";
    }

    let res = [];
    for (let item of array){
        if(typeof(item) === `string`){
            res.push(item);
        }else if (Array.isArray(item)) {
            for(let el of item){
                if (typeof(el) ===`string`) {
                    res.push(el);
                }
            }

        }
    }
    return res;

}