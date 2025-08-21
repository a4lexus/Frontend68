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



