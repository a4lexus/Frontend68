const form = document.getElementById("userform");
const userList = document.getElementById("userList");
const users = [];

function render() {
    userList.innerText = "";
    users.forEach((user, index) => {
        console.log(user, index);

    });
}




form.addEventListener("submit", (e) => {
    e.preventDefault();
    /*
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
    
        console.log(firstName,lastName,email);
    
        // добавить на страницу
        const li = document.createElement("li"); // создали обьект элемента списка
        li.innerText = `${firstName}${lastName} (${email})`; // добавили к нему text
    
        // кнопка удалить
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Удалить";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = () => li.remove();
        li.appendChild(deleteBtn);
    
    
        userList.appendChild(li); // отобразили на странице
    */
    render();
    form.reset();
})