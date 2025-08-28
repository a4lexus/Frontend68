const jack = {
    name: "Jack",
    age: 25,
    info: function(){
        console.log(`${this.name}: ${this.age} `);
    }
};

/*  ошибка, т.к. jack константа переприсваевать значения нельзя
jack = {
    name:"peter"
}

jack.name = "Peter"; // ок 
*/

const ann = {
    fName: "Anna",
    lName: "Smith",
    age: 20
}

console.log(jack);
console.log(ann);

let users = [jack, ann, {name: "john", age:19}];
console.log(users);

console.log(jack.name); 
jack.age = 30; // переписали возраст
console.log(jack);

ann.name = "Anna"; // добавили поле (свойство) в обьект ann
console.log(ann);
delete ann.fName;
console.log(ann);
ann.children = undefined;


console.log(ann.children); // undefined

//if(ann.children === undefined){
if(!`children` in ann){
    console.log("поле children нет у  ann");
}else{
    console.log("поле children существует");
}

console.log("------- доступ к полям через имя []: ------")
console.log(ann["name"]); // получить значение поля с именем "name"

console.log("----------- Перебор: -------------------")
for (let key in ann){
    let value = ann[key]; // получить значение поля с именем, которое лежит в переменной key
    console.log(`${key}: ${value}`);
}
    
console.log(jack.info); // выводит саму функцию как значение поля info
console.log(jack.info()); // выводит результат вызова функции info

function Person(name,age){
    this.name = name;
    this.age = age;
    this.info = function(){
        console.log(`${this.name}: ${this.age} `)
    }

}

let peter = new Person("peter", 32);
console.log(peter);
peter.info();