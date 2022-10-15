const Router = require("express").Router;

let apiRouter = new Router();
apiRouter.get("/", (req, res) => {
    res.send("api");
});

module.exports = apiRouter;