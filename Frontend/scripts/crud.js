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
  //додаємо нового користувача 
  add(user) {
    if (!(user instanceof User)) 
        throw `${user} is not instance of User`;
    this.items.push(user);
  }
  //знаходиомо користувача по id
  getById(id) {
    return this.items.find(user => user.id == id);
  }
  //знаходиомо користувача по імені
  getByUsername(username) {
    return this.items.find(user => user.username == username);
  }
  //знаходиомо користувача довжина якого коротша завказану
  getShortUsernames(len) {
    return this.items.filter(user => user.username.length <= len);
  }
  // Копія списку всіх користувачів
  getAll() {
    return [...this.items];
  }
  //оновлюємо дані користувача із вказаним id
  update(id, updatedUser) {
    let user = this.getById(id);
    if (!user) 
        throw "Not found";

 
    // if (newUser.username)
    //     user.username = newUser.username;
    // if (newUser.password)
    //     user.password = newUser.password;
    // if (newUser.image)
    //     user.image = newUser.image;
    
    // щоб не писати багато одинакових операторів використаємо цикл по списку властивостей класу, які можна змінювати
    for (let key of user.settablePropertiesList)
      if (updatedUser[key]) 
        user[key] = updatedUser[key];
  }
  // вилучення користувача із вказаним id
  delete(id) {
    let userIndex = this.items.findIndex(user => user.id == id);
    if (userIndex == -1) 
        throw "Not found";
    this.items.splice(userIndex, 1);
  }
}
