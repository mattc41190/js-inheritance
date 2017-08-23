// Child
"use strict"
const Animal = require('./animal.js');

function Dog(name) {
    // const __thisDog__ = this;
    Animal.call(this, name, "Dog", "Woof");
}

module.exports = Dog;
