class Person {
    #birthday = Date.now();
    name = "noname";
    
    constructor(name = "noname", birthday = Date.now(), marks = []) {
        this.name = name;
        this.#birthday = birthday;
        this.birthday = birthday;
        this.marks = marks;
    }

    getAvgMark() {
        let sum = 0;
        for (let mark of this.marks) {
            sum += mark;
        }
        return sum / this.marks.length;
    }

    get age() {
        return Math.floor((Date.now() - this.#birthday) / 1000 / 60 / 60 / 24 / 365.25);
    }

    // set age(value) {
    //     if (value > 0)
    //         this._age = value;
    //     else
    //         throw "Age must be postive number";
    // }
}

Person.staticfield = 42;

class Worker extends Person {
    constructor(name = "noname", age = 0, marks = [], payment = 0) {
        super(name, age, marks);
        this.payment = payment;
    }

    pay() {
        document.write(`${this.payment} грн.`);
    }
}


let person = new Person("Yurii", new Date(1988, 6, 3), [1, 2, 3]);
alert(person.age);
alert(person.birthday);
// alert(person.#birthday);
// alert(person.age);
// person.age = -10;
// alert(person.age);