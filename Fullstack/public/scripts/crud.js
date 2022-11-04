/*
 * клас реалізує шаблон Create Read Update Delete
 * для колекції користувачів.
 */

class UserCollection {
  constructor() {
    this.items = [];

  }

  //кількість користувачів в колекції
  get count() {
    return this.items.length;
  }
  //створюємо нового коритсувача 
  async create(userData) {
    let resp = await fetch("http://localhost:3000/users",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json'
        },
      }
    );
    if (!resp.ok) {
      alert("Error creating user");
      return null;
    }
    return await resp.json();
  }

  //знаходиомо користувача по id
  getById(id) {
    return this.items.find(user => user.id == id);
  }
  //знаходиомо користувача по імені
  getByUsername(username) {
    return this.items.find(user => user.username.toLowerCase() == username.toLowerCase());
  }
  //знаходиомо користувача довжина якого коротша за вказану
  getShortUsernames(len) {
    return this.items.filter(user => user.username.length <= len);
  }

  getByUsernameStart(searchString) {
    return this.items.filter(user => user.username.toLowerCase().startsWith(searchString.toLowerCase()));
  }

  // генеруємо колекцію з масиву
  fromArray(userDataArray) {
    this.items = [];
    for (let userData of userDataArray) {
      let user = new User();
      user.fromDict(userData);
      this.items.push(user);
    }
    return this.items;
  }

  // Копія списку всіх користувачів
  async getAll() {
    let resp = await fetch("http://localhost:3000/users");
    if (!resp.ok) {
      alert("Error Loading");
      return [];
    }
    let userDataArray = await resp.json();
    return this.fromArray(userDataArray);;
  }
  //оновлюємо дані користувача із вказаним id
  async update(id, updatedUser) {
    let resp = await fetch(`http://localhost:3000/users/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(updatedUser),
        headers: {
          'Content-Type': 'application/json'
        },
      }
    );
    if (!resp.ok) {
      alert("Error updating user");
      return null;
    }
    return await resp.json();
  }
  // вилучення користувача із вказаним id
  async delete(id) {
    let resp = await fetch(`http://localhost:3000/users/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!resp.ok) {
      alert("Error deleting user");
      return null;
    }
    return await resp.json();
  }
}
