// Child
'use strict'
const Animal = require('./animal.js').Animal;
const AnimalPrototype = require('./animal.js').AnimalPrototype;

function Dog(name) {
    Animal.call(this, name, 'Dog', 'Woof');
}

// Dog.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(AnimalPrototype);

module.exports = Dog;
