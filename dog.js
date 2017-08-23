// Child
'use strict'
const Animal = require('./animal.js');

function Dog(name) {
    Animal.call(this, name, 'Dog', 'Woof');
}

Dog.prototype = Object.create(Animal.prototype);

module.exports = Dog;
