"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello my name is ${this.name}, and I am ${this.age} years old.`);
    }
}
const u1 = new Person("Bob", 23);
const u2 = new Person("Alice", 24);
const u3 = new Person("Alex", 25);
