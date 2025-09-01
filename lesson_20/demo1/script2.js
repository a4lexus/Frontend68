// https://jsonplaceholder.typicode.com/users

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        if (res.ok) {      // проверили, что ответ получен
            return res.json(); // вернёт json содержимое ответа

        } else { 
            throw new Error("ошибка загрузки данных");
        }
    })
    .then( loadedUser => {
        
        loadedUser.forEach(user =>
             console.log(user))
             // return fetch(...);
    }
    )
.catch(
    e => console.log(e)
);
