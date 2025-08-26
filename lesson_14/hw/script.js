/*
Пусть дано две числовых переменных num1 и num2.Напишите программу на JS проверяет, 
что переменные именно числовые и выводит в консоль значение num1 в степени num2,
 для подсета используйте цикл, а не стандартный.Сравните результат полученный вашим
  кодом и стандартной операцией '**'.Результат сравнение выведите в консоль.
*/

const num1 = 2;
const num2 = 4;

if(typeof (num1) === `number` && typeof(num2) === `number`){
    console.log(`считаем степень: ${num1}^${num2}`);
    // num1*num1*num1 .......  [выполняем num2 раз ]
    
    let result = 1;
    for(let i = 0; i < num2; i++){
        result *= num1;
    }
console.log(`Степень (через цикл):${num1}^${num2} = ${result}`);
const result2 = num1 ** num2;
console.log(`Степень (через **):${num1}^${num2} = ${result2}`);
console.log(result === result2 ? "результаты совпали": "где-то ошибка");

}else{
    console.log("неверные параметры!")
}
/*
console.log(num1 == "2","num1 == '2'");
console.log(num1 === "2", "num1 === '2'");
console.log(num1 != "2","num1 != '2'");
console.log(num1 !== "2", "num1 !== '2'");
*/