// In TypeScript, a class is a blueprint for creating objects with properties and methods. Classes provide a way to define and structure your data and behavior in an object-oriented manner. TypeScript's class syntax is similar to the class syntax in other object-oriented programming languages like Java or C++.

// Properties: Inside the class, you can define properties (also called fields or attributes) that store data related to the class.

// Constructor: The constructor is a special method that is called when an object of the class is created. It initializes the properties of the class.

// Methods: You can define methods inside the class, which are functions that perform actions or operations related to the class.

// In TypeScript and many other programming languages, this is a special keyword that refers to the current instance of an object within the context of a class or method. When you use this inside a class, it allows you to access and manipulate the properties and methods of that specific instance of the class.

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello my name is ${this.name}, and I am ${this.age} years old.`
    );
  }
}

const u1 = new Person("Bob", 23);
const u2 = new Person("Alice", 24);
const u3 = new Person("Alex", 25);
