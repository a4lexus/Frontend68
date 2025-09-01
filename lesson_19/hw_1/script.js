/*
a) Создайте несколько объектов-продуктов. В каждом объекте должно быть поле name (название),
 description(описание), price(цена), info (функция, которая формирует строку вида: товар:
  notebook lenovo thinkpad; цена: 1283 описание: cpu intel core7, ram:16gb ...
b) создайте конструктор для создания объектов-товаров. Создайте несколько товаров
с) Создайте массив из товаров. Напишите функцию, которая выводит в консоль информацию о всех товарах в виде:
Tовар 1
    name: notebook lenovo thinkpad
    price: 1283
    description: .....
    info: ....
Copy
т.е. поле: значение При этом: поля, которые являются функциями, нужно выводить результат работы функции
 (не текст функции)
*/
/*
{} - обьект
[] - массив
() - функция
 */

const item1 = {
    name: "notebook lenovo thinkpad",
    price: 1283,
    description: "cpu intel core7, ram:16gb",
    info: function () {
        return `товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;

    }
}
console.log(item1);
console.log(item1.info());


function Product(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.info = function () {
        return `${this.name} ${this.description} ${this.price} €`;
    }
}
const item2 = new Product("Acer N1234", 1680, "Acer game notebook");
console.log(item2);
console.log(item2.info());

const items = [item1, item2, new Product("Smartphone iphone 16 pro", 1999, "24 Kamera 24 gb ram")];
console.log(items);
print();

/*
for(key in item1){          // перебираем поля обьекта
    console.log(key);       // выводим название каждого поля
    console.log(item1[key]);// значение поля название которого лежит в key
    if(typeof())
    console.log(item1[key]);// значение поля название которого лежит в key
}
*/


function print() {
    for (let i = 0; i < items.length; i++) {
        console.log(`Товар: ${i + 1} `);
        let item = items[i];
        for (key in item) {
            let value = item[key];
            if (typeof (value) === 'function') {
                value = item[key]();
            }
            console.log(`${key}:${value}`)
        }
    }
}
