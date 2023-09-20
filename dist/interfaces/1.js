"use strict";
class User {
    constructor(n, a, p, add) {
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
