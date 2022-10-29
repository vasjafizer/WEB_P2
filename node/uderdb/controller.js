const User = require ("./model");

const userController = {
    getAll: async (req, res) =>{
        const users = await User.findAll();
        res.send(users);
    }
}

module.exports = userController;