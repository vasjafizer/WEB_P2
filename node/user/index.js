const Router = require("express").Router;
const userController = require("./controller");

let userRouter = new Router();

userRouter.get("/", userController.getAll);

userRouter.get("/:id", userController.getById);

userRouter.post("/", userController.post);

userRouter.patch("/:id", userController.patch);

module.exports = userRouter;