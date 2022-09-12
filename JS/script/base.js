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
console.log(isNaN(0));

//Boolean
let t = true, f = false, logicalExpr = (x>0) && !(z!=100);

//String
let s1 = "\"string \n 1 \"",
s2 = '"string" 2',
s3 = `"string" 3
    x**2 = ${x**2}
`;
alert(s3);

//null
let nothing = null;

//undefined;
let undef;



