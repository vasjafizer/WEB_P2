// 1. літерал
let person = {
    name: "Yurii",
    surname: "Andrashko",
    age: 34,
    marks: [100, 85, 60, 90],
    getAvgMark: function () {
        let sum = 0;
        for (let mark of this.marks) {
            sum += mark;
        }
        return sum / this.marks.length;
    },
    // this - глобальний об'єкт НЕ ВИКОРИСТОВУВАТИ
    getArrowAvgMark: () => {
        let sum = 0;
        for (let mark of this.marks) {
            sum += mark;
        }
        return sum / this.marks.length;
    }
}

// marks = [1, 2, 3];
// alert(person.getArrowAvgMark());

//2. функція - конструктор

function Person(name = "noname", age = 0, marks = []) {
    this.name = name;
    this.age = age;
    this.marks = marks;
    //не рекомендується зайвівитрати пам'яті
    this.getConstructorAvgMark = function () {
        let sum = 0;
        for (let mark of this.marks) {
            sum += mark;
        }
        return sum / this.marks.length;
    };
}

Person.prototype.getAvgMark = function () {
    let sum = 0;
    for (let mark of this.marks) {
        sum += mark;
    }
    return sum / this.marks.length;
};

function Worker(name = "noname", age = 0, marks = [], payment = 0) {
    this.name = name;
    this.age = age;
    this.marks = marks;
    this.payment = payment;
}

Worker.prototype = Object.create(Person.prototype); //new Person();
Worker.prototype.pay = function () {
    document.write(`${this.payment} грн.`);
}

let worker = new Worker("Yurii", 34, [100, 95, 90], 15000);
alert(worker.getAvgMark());
worker.pay();
person2.getAvgMark = () => 0;


// let person2 = new Person("Yurii", 34, [100, 95, 90]);
// console.log(person2);
// console.log(person2.getAvgMark());