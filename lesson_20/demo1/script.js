function getInfo(request) {
    let promise = new Promise(
        function (resolve, reject) {        // функция executor
            const ok = Math.random() > 0.3;


            if (ok) {
                resolve({ code: `получено ${request}` });
            } else {
                reject({ msg: `error!!! при получении ${request}` });
            }

        });

    return promise;
}
/*
getInfo("1")
    .then (
        responce => console.log(responce), // callback который исполнится в слачае успеха
        err => console.log(err)
        
    );
*/
/*
    getInfo("0.2")
    .then (
        responce => console.log(responce), // callback который исполнится в случае успеха
        
        
    )
    .catch (
        err => console.log(err)
    );
*/
getInfo("пользователь Jack")
    .then(response => {
        console.log(response);

        return getInfo("профиль пользователя" + response.code)
    })
    
    .then(response => {
        console.log(response);
        return getInfo("фото пользователя");
    })
    .then(response => console.log(response))

    .catch (
        err => console.log(err)
    );