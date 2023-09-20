// Class---: Used for Implementing Behavior
// Interface: Used for Defining Shape

// Interfaces are for defining the structure of objects, specifying the shape and types of their properties. Use them when you want to ensure consistency in the structure of objects across your codebase and provide clear contracts for objects that need to adhere to specific shapes.

interface address {
  street: string;
  road: number;
  house: number;
  zip: number;
  city: string;
  Thana: string;
  country: string;
}

class User {
  name: string;
  age: number;
  phone: number;
  address: address;

  constructor(n: string, a: number, p: number, add: address) {
    this.name = n;
    this.age = a;
    this.phone = p;
    this.address = add;
  }

  display() {
    console.log(`Welcome ${this.name}!`);
    console.log("This is your Profile");
    console.log(this.address);
  }
}

const u = new User("Alex", 23, 1871027337, {
  street: "Baker strret",
  road: 23,
  house: 23,
  zip: 3500,
  city: "Dhaka",
  Thana: "Sadar",
  country: "Ban",
});

console.log(u.display());
