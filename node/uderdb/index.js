const Router = require("express").Router;
const { getAll } = require("./controller");

let userDbRouter = new Router();

userDbRouter.get("/", getAll);

module.exports = userDbRouter;