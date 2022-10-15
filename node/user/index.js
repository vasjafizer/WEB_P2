const Router = require("express").Router;

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
        imge: "https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png"
    }
];

let userRouter = new Router();

userRouter.get("/", (req, res) => {
    res.send(users);
});

userRouter.get("/:id", (req, res) => {
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
});

userRouter.post("/", (req, res) => {
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
});

module.exports = userRouter;