/*
 *Клас користувача
 * username - логін
 * _password - пароль не менше 3 символів
 * image - URL аватара
 * _idCounter - статична властивість, використовується для генрування унікального ідентифікатора.
 * setablePropertisList - список полів, які можна змінювати
 */

class User {

  constructor(username, password, image) {
    this.username = username;
    this.password = password;
    this.image = image;
    this._id = User._idCounter++; // генеруємо унікальний ідентифікатор 0, 1, 2, ...
  }

  get password() {
    return this._password;
  }

  //повертає прихований пароль: кількість * рівна довжині паролю
  get hiddenPassword() {
    return "*".repeat(this._password?.length);
  }

  //Валідація довжини пароля
  set password(value) {
    const MIN_PASSWORD_LENGTH = 3;
    if (value?.length < MIN_PASSWORD_LENGTH) 
        throw `Password to short. Need more ${MIN_PASSWORD_LENGTH - value?.length} symbols`;
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

  fromDict(userData){
    this._id = userData["id"];
    this.username = userData["username"];
    this.password = userData["password"];
    this.image = userData["image"];
    return this;
  }
}

User._idCounter = 0;

