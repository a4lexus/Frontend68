let num1 = 2;
let num2 = 3;


if (typeof num1 === 'number' && typeof num2 === 'number') {
    let result = 1;

    for (let i = 0; i < num2; i++) {
        result = result * num1;
    }

    let standard = num1 ** num2;

    console.log("Результат через цикл:", result);
    console.log("Стандартный способ:", standard);
    console.log("Совпадают:", result === standard);

} else {
    console.log("Не совпадают:", result !== standard);
}

/*
Пусть дано две числовых переменных num1 и num2.Напишите программу на JS проверяет, 
что переменные именно числовые и выводит в консоль значение num1 в степени num2,
 для подсета используйте цикл, а не стандартный.Сравните результат полученный вашим
  кодом и стандартной операцией ''.Результат сравнение выведите в консоль.
*/