/*Assignment 06*/
console.log('Assignment - 06');

interface User {
    name: string,
    age: number,
    isLegal: () => boolean
};

//implementing an interface
class Manager implements User {
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }

    isLegal() {
        return (this.age > 18);
    }
};

class SuperManager extends Manager {
    isLegal() {
        return this.age > 18
    }
}

//Difference between Abstract class and an interface
abstract class Shape {
    abstract area(): number;
    parameter(): number {
        console.log('Kindly implement this method. Currently, it is returning 0');
        return 0;
    }

    public static AboutShapeClass() {
        console.log('Hi this class is an Abstract class');
    }
};

class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    area(): number {
        return (this.width * this.height);
    }
    parameter(): number {
        return 2 * (this.width + this.height);
    }
}

let rectangle1 = new Rectangle(2, 3);
console.log(`Area is ${rectangle1.area()}`);
console.log(`Parameter is ${rectangle1.parameter()}`);