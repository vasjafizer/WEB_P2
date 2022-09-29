/*
* клас доповнює можливості колекції користувачів відображатись на дисплеї
*/

class UserCollectionWithDOM extends UserCollection  {
    //генеруємо рядок таблиці за вказаними даними користувача
    userToTableRowHtml(user) {
        return `
        <tr>
            <td>
                ${user.id}
            </td>
            <td>
                ${user.username}
            </td>
            <td>
                ${user.hiddenPassword}
            </td>
            <td>
                <img
                    src="${user.image}"
                    alt="${user.username}"
                    class="avatar"
                />
            </td>
            <td> 
                <button onclick="DeleteUser(${user.id})">
                    Delete
                </button>
            </td>
            <td> 
                <button onclick="StartEditUser(${user.id})">
                    Edit
                </button>
            </td>
        </tr>
        `;
    }
    // генеруємо таблицю користувачів
    usersToTableHtml() {
        let rows = "";
        for (let user of this.getAll()) {
            rows += this.userToTableRowHtml(user);
        }
        return `
            <table>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Username
                    </th>
                    <th>
                        Password
                    </th>
                    <th>
                        Image
                    </th>
                    <th colspan="2">
                        Actions
                    </th>
                </tr>
                ${rows}
            </table>
            <button type="button" onclick="ShowAddUserForm()">
                Add user
            </button>
        `;
    }
    // форма для додавання нового користувача    
    addFormHtml() {
        return ` 
            <div id="add-user">
                <form name="addForm" method="post" action="#">
                    <h3> Add User </h3>
                    <input name="id" type="hidden">
                    <input name="username" placeholder="username"> 
                    <input name="password" placeholder="password">
                    <input name="image" placeholder="avatar url">
                    <button type="button" onclick="AddNewUser()">
                        Save
                    </button>
                </form>
            </div>
        `;
    }
    //форма для редагування даних користувача
    editFormHtml() {
        return ` 
            <div id="edit-user">
                <form name="editForm" method="post" action="#">
                    <h3> Edit User </h3>
                    <input name="id" type="hidden">
                    <input name="username" placeholder="username"> 
                    <input name="password" placeholder="password">
                    <input name="image" placeholder="avatar url">
                    <button type="button" onclick="EditUser()">
                        Save
                    </button>
                </form>
            </div>
        `;
    }

    //монтуємо компонент у вказаний батьківський та призначаємо обробку подій
    mount(parrent) {
        this._parrent = parrent;
        this.render();
        this.addEventListners();
        this.createClickHadlers();
        this.addErrorMessage();
    }

    // генеруємо HTML код таблиці користувачі та форм редагування та додавання нового користувача
    render() {
        this._parrent.innerHTML = this.usersToTableHtml() + this.addFormHtml() + this.editFormHtml();
    }
    // навішуємо слухачів події
    addEventListners() {
        //вилучаємо користувача
        document.addEventListener("deleteUser", event => {
            super.delete(event.detail.id);
            this.render();
        });
        // додаємо нового користувача
        document.addEventListener("addUser", event => {
            super.add(
                new User(
                    event.detail.username,
                    event.detail.password,
                    event.detail.image
                )
            );
            this.render();
        });
        //редагуэмо користувача
        document.addEventListener("editUser", event => {
            super.update(event.detail.id, event.detail);
            this.render();
        });
    }

    createClickHadlers(){
        // функція вилучення користувача при кліці на відповідну кнопку. генерує подію deleteUser
        window.DeleteUser = (id) => {
            let deleteUserEvent = new CustomEvent("deleteUser", { detail: { id } });
            document.dispatchEvent(deleteUserEvent);
        }

        //функція показу форми редагування користувача
        window.ShowAddUserForm = () => {
            document.getElementById("add-user").style.display = "block";
        }
        // функція додавання нового користувача. генерує подію аddUser
        window.AddNewUser = () => {
            const username = document.getElementsByName("username")[0].value;
            const password = document.getElementsByName("password")[0].value;
            const image = document.getElementsByName("image")[0].value;
            let addUserEvent = new CustomEvent("addUser", {
                detail: {
                    username, //username: username
                    password,
                    image
                }
            });
            document.dispatchEvent(addUserEvent);
        }

        // показуємо форму редагування та заповнюємо її значеннями користувача із вказаним id
        // оскіль в функції використовується super то тут можна використовуватит  ВИКЛЮЧНО ЛЯМБДА ФУНКЦІЮ!
        // Анонімна функція видасть помилку. Решта функцій не використовує super чи this, тому їх можна робити як лямбда так і анонімними
        window. StartEditUser = (id) => {
            document.getElementById("edit-user").style.display = "block";

            let user = super.getById(id); // знаходимо користувача із вказаним id 
            document.getElementsByName("id")[1].value = user.id;
            document.getElementsByName("username")[1].value = user.username;
            document.getElementsByName("password")[1].value = user.password;
            document.getElementsByName("image")[1].value = user.image;
        }

        //отримуємо відредаговані значення користувача із форми та генеруємо подію editUser
        window.EditUser = () => {
            const id = parseInt(document.getElementsByName("id")[1].value);
            const username = document.getElementsByName("username")[1].value;
            const password = document.getElementsByName("password")[1].value;
            const image = document.getElementsByName("image")[1].value;
            let editUserEvent = new CustomEvent("editUser", {
                detail: {
                    id,
                    username,
                    password,
                    image
                }
            });
            document.dispatchEvent(editUserEvent);
        }
    }
    // функція виводу повідомлень про помилку
    addErrorMessage(){
        window.onerror = (error) => {
            alert(error);
        }
    }
}

