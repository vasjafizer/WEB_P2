const Router = require("express").Router;
const { getAll, getById, post, patch, deleteById } = require("./controller");

let userRouter = new Router();

userRouter.get("/", getAll);
userRouter.get("/:id", getById);
userRouter.post("/", post);
userRouter.patch("/:id", patch);
userRouter.delete("/:id", deleteById);

module.exports = userRouter;