// alert ("hello");

//Змінні 
// intNumber = 3;
// floatNumber = 5; //Uncaught ReferenceError: Cannot access 'floatNumber' before initialization

var intNumber = 5;

let floatNumber = 3.14;
const strConst = "string";

floatNumber = 0.5;
intNumber = -2;
// strConst = "new"; //Uncaught TypeError: Assignment to constant variable.

// alert(floatNumber);
console.log(intNumber);

if (true) {
    var globalVariable = 1;
    let localVariable = "local";
}

console.log(globalVariable);
// console.log(localVariable); //Uncaught ReferenceError: localVariable is not define

//Number
let x = 1, y = 2.15, z = 2e50, inf = Infinity;
console.log(isNaN(0 / 0));

//Boolean
let t = true, f = false, logicalExpr = (x > 0) && !(z != 100);

//String
let s1 = "\"string \n 1 \"",
    s2 = '"string" 2',
    s3 = `"string" 3
    x**2 = ${x ** 2}
`;
// alert(s3);

//null
let nothing = null;

//undefined;
let undef;


//присвоєння за значенням
let var1 = 2;
let var2 = var1;
var2 = 3;
// alert(`${var1}, ${var2} `);

//присвоєння за посиланням
let var3 = { vlaue: 2 };
let var4 = var3;
var4.vlaue = 3;
// alert(`${var3.vlaue}, ${var4.vlaue} `);

//вивід
// alert("hello");
console.log("hello");
document.write("<h3> hello </h3>");

//ввід
// let age = prompt("введіть вік");

let age1 = parseInt("25 років"), // wight: 300px
    age2 = parseFloat("25.5 років"),
    age3 = parseFloat("три");
// alert (`age1 ${age1} age2 ${age2} age3 ${age3}` );


//з розгалуженням
if (age1 && age1 > 20) {
    document.write("Ласкаво просимо");
} else {
    document.write("Приходіть пізніше");
}
document.write('<br>');
switch (age1) {
    case 50: case 25: case 75:
        document.write("Вітаємо");
        break;
    case 100:
        document.write("Вітаємо!!!!!");
        break;
    default:
        document.write(`Зачекайте`);
}
document.write('<br>');

//циклічні
const n = -3;
// for ітератор
for (let i = 1; i < n; i++) {
    document.write(`<p> ${i} </p>`);
}

//з передумовою
let i = 1;
while (i < n) {
    document.write(`<p> ${i} </p>`);
    i++;
}

//з післяумовою
i = 1;
do {
    document.write(`<p> ${i} </p>`);
    i++;
} while (i < n);

// for -  of
let range = ["one", "two", "three"];
for (let element of range){
    document.write(`<p> ${element} </p>`);
}

// for - in
for (let key in range){
    document.write(`<p> ${key}  ${range[key]}</p>`);
}
