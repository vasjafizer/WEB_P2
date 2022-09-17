const login = "user", password = "qwerty";

function loginClick() {
    // let userLogin = document.body.children[1].children[2].value;
    let userLogin = document.getElementById("login")?.value;
    if (userLogin.length < 3) {
        document.getElementById("login").style.backgroundColor = "yellow";
        alert("login is too short");
        return;
    } else {
        document.getElementById("login").style.backgroundColor = "";
    }

    let form = document.body.getElementsByClassName("login-form")[0];
    let userPssword = form.getElementsByTagName("input")[1]?.value;

    if (userLogin == login && userPssword == password) {
        alert("Wellcome");
    } else {
        alert("Wrong login");
    }
}


function resetClick() {
    document.getElementById("login").value = "";
    document.getElementById("password").value = "";
}

document.getElementById("reset-button").onclick = resetClick;

//вивести
let list = ["red", "green", "blue"];
let ol = document.getElementById("list");
function showListClick() {
    ol.innerHTML = "";
    for (let el of list){
        let li = document.createElement("li");
        ol.appendChild(li);
        li.innerText = el;
    }
}

function showListClickTemplate(){
    let template = "";
    for (let el of list){
        template += `<li>${el}</li>`;
    }
    ol.innerHTML = template;
}

document.getElementById("show-list").onclick = showListClickTemplate;
