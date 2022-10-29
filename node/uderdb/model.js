const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize(
    "testdb",
    "testuser",
    "qwerty",
    {
        dialect: "mysql",
        host: 'localhost',
    }
);

class User extends Model { }
//ініціалізуємо модель, вказуємо всі властивості крім id
User.init({
    login: {
        //обов'язково вказуємо тип 
        type: DataTypes.STRING,
        validate: {
            len: [5, 255]
        }
    },
    password: {
        type: DataTypes.STRING,
        // також можемо вказати валідатори
        // https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
        validate: {
            // наприклад довжжина від 3 до 50 символів
            len: [3, 50]
        }
    },
    image: {
        type: DataTypes.STRING,
        // значення може бути не вказаним
        allowNull: true,
    },
}, {
    // підключення до бази даних
    sequelize,
    // назва моделі в однині. В базі повинна бути таблиця в множині (users)
    modelName: "User",
    // вказуємо щоб не створювались поля createdAt та updatedAt
    createdAt: false,
    updatedAt: false,
});

module.exports = User;