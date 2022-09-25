/*
 *Клас користувача
 * username - логін
 * _password - пароль
 * image - URL аватара
 * _idCounter - статична властивість, використовується для генрування унікального ідентифікатора.
 * setablePropertisList - список полів, які можна змінювати
 */

class User {
  constructor(username, password, image) {
    this.username = username;
    this._password = password;
    this.image = image;
    this._id = User._idCounter++; // генеруємо унікальний ідентифікатор 0,1,2, ...
  }

  get password() {
    return this._password;
  }

  //повертає прихований пароль: кількість * рівна довжині паролю
  get hiddenPassword() {
    return "*".repeat(this._password?.length);
  }

  set password(value) {
    if (value.length < 3) throw "Password to short";
    this._password = value;
  }

  get id() {
    return this._id;
  }

  //список властивостей класу які можна змінювати
  get settablePropertiesList() {
    return ["username", "password", "image"];
  }

  get gettablePropertiesList() {
    return ["id", ...this.setablePropertisList];
  }
}

User._idCounter = 0;
