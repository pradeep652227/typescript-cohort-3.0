"use strict";
/*Assignment 06*/
console.log('Assignment - 06');
;
//implementing an interface
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    isLegal() {
        return (this.age > 18);
    }
}
;
class SuperManager extends Manager {
    isLegal() {
        return this.age > 18;
    }
}
//Difference between Abstract class and an interface
class Shape {
    parameter() {
        console.log('Kindly implement this method. Currently, it is returning 0');
        return 0;
    }
    AboutShapeClass() {
        console.log('Hi this class is an Abstract class');
    }
}
;
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    area() {
        return (this.width * this.height);
    }
    parameter() {
        return 2 * (this.width + this.height);
    }
}
let rectangle1 = new Rectangle(2, 3);
console.log(`Area is ${rectangle1.area()}`);
console.log(`Parameter is ${rectangle1.parameter()}`);
