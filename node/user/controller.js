const { users, maxId } = require("./model");

const userController = {
    getAll: (req, res) => {
        res.send(users);
    },
    getById: (req, res) => {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id))
                // throw "Convert error";
                res.status(400).send("id is not a number");
            const user = users.find(user => user.id === id);
            if (!user)
                res.status(404).send("not found");
            res.send(user);
        }
        catch (exception) {
            res.status(500).send(exception);
        }
    },
    post: (req, res) => {
        if (!req.body?.login || !req.body?.password)
            res.status(400).send("login and password are required");
        const minLen = 3;
        if (req.body?.login?.length < minLen)
            res.status(400).send("login is to short");
        let user = {
            id: ++maxId,
            login: req.body?.login,
            password: req.body?.password,
            image: req.body?.image ?? "https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_960_720.png"
        };
        users.push(user);
        res.send(user);
    },
    patch: (req, res) => {
        const id = parseInt(req.params.id);
        if (isNaN(id))
            res.status(400).send("id is not a number");
        const user = users.find(user => user.id === id);
        if (!user)
            res.status(404).send("not found");
        const minLen = 3;
        if (req.body?.login && req.body?.login?.length < minLen)
            res.status(400).send("login is to short");

        // if (req.body?.login)
        //     user.login = req.body.login;
        // if (req.body?.password)
        //     user.password = req.body.password;
        // if (req.body?.image)
        //     user.image = req.body.image;

        for (let prop of ["login", "password", "image"])
            if (req.body[prop])
                user[prop] = req.body[prop];

        res.send(user);
    }
};


module.exports = userController;