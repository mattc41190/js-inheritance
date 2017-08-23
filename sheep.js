'use strict'
const Animal = require('./animal.js').Animal;

function Sheep(name, species, sound) {
    Animal.call(this, name, "Sheep", "Baaaaahhh");
}

Sheep.prototype = Object.create(Animal.prototype);

module.exports = Sheep;