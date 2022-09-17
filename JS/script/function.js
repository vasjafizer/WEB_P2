//декларативний опис
//відстань між точками
// let x1 = 2, y1 = 2, x2 = 1, y2 = 5, x3 = 0, y3 = -2;
// // let distance12 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
// // let distance13 = Math.sqrt((x3 - x1) ** 2 + (y3 - y1) ** 2);
// // let distance23 = Math.sqrt((x2 - x3) ** 2 + (y2 - y3) ** 2);
// let distance12 = distance(x1, y1, x2, y2);
// let distance13 = distance(x1, y1, x3, y3);
// let distance23 = distance(x2, y2, x3, y3);
// document.write(`${distance12} <br> ${distance13} <br> ${distance23}`);

// function distance(x1, y1, x2, y2) {
//     return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
// }


// function testReturn(){
//     document.write("before return");
//     return ;
//     document.write("after return");
// }

// console.log(testReturn());

//локальні і глобальні змінні
let global = 42;

// function testLocal() {
//     let local = 50;
//     function localFunc() {
//         let superLocal = 12;
//         document.write(`local function :${global} ${local}`);
//     }
//     document.write(`${global} ${local}`);
//     localFunc();
// }

// testLocal();
// document.write(`${global} `);
// function testRedeclaration(){
//     let global = 0;
//     document.write(`global in function: ${global} <br>`);
// }
// testRedeclaration();
// document.write(`global: ${global}`);

//передача за значенням і за посиланням.

// function setZero(x) {
//     x = 0;
// }
// let a = 5;
// setZero(a);
// document.write(`a=${a} `);

arrA = [1, 2, 3];
// function setZeroArray(arr) {
//     for (let i = 0; i < arr.length; i++)
//         arr[i] = 0;
// }
// setZeroArray(arrA);
// document.write(arrA);


// анонімна функція
let anonymFunc = function (x) {
    return x ** 2;
};

document.write(anonymFunc(5) + "<br>");


//колбек
// document.write(arrA.map(anonymFunc) + "<br>");
// document.write(arrA.map(function (x) { return x + 1 }) + "<br>");
// document.write(arrA.filter(function (el) { return el % 2 == 1 }) + "<b>");

// setTimeout(function () {
//     alert("time");
// }, 2000);

// let i = 1;
// setInterval(function () {
//     document.write(`${i} <br>`);
//     i++;
// }, 1000);

// =>
// document.write(arrA.map((element, index) => element + index) + "<br>");
// let i = 1;
// let timer = setInterval(() => {
//     document.write(`${i} <br>`);
//     i++;
// }, 1000);

// setTimeout(() => {
//     clearInterval(timer);
//     document.write(`timer id ${timer} canceld <br>`);
// }, 5000);

//самовикликаюча анонімна функція
(function (param) {
    document.write(`<p>Self call with ${param}</p>`);
})("param");

//аргументи
function sum(n, ...args) {
    // console.log(arguments);
    s = 0;
    for (let el of args) {
        s += el
    }
    return s;
}
document.write(`${sum(5, 1, 2, 3, 4, 5)} <br>`);
