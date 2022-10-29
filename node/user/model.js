let maxId = 2;
let users = [
    {
        id: 1,
        login: "User",
        password: "qwerty",
        image: "https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_960_720.png"
    },
    {
        id: 2,
        login: "Admin",
        password: "VeryLongPassword!",
        image: "https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png"
    }
];

const Validator = {
    minLength: 5,
    validateLogin: function (login) {
        console.log(login);
        return login?.length >= this.minLength
    }
}

module.exports = {
    users,
    maxId,
    Validator
};