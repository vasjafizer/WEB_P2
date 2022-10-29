const express = require("express");
const apiRouter = require("./api");
const userRouter = require("./user");
const userDbRouter = require("./uderdb");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", apiRouter);
app.use("/user", userRouter);
app.use("/userdb", userDbRouter);

app.get("/about", (req, res) => {
    let author = "Yurii";
    let email = "yurii.andrashko@uzhnu.edu.ua";
    let time = Date.now();
    let template = `
        <h2> author is ${author}</h2>
        <p> email is <strong> ${email} </strong> </p>
        <p> time: ${new Date(time)} </p>
    `;
    res.send(template);
});

app.get("/list", (req, res) => {
    const result = {
        list: [1, 2, 3],
        count: 3
    };
    res.send(result);
});

app.all("*", (req, res) => {
    res.status(404).send("Not found");
});

app.listen(3000, () => {
    console.log("server started");
});