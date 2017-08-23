'use strict'
const Animal = require('./animal.js').Animal;

function Cat(name, species, sound) {
    var myCurrentCat = this;
    Animal.call(myCurrentCat, name, "Cat", "Mraaahhh");
}

Cat.prototype = Object.create(Animal.prototype);

module.exports = Cat;
