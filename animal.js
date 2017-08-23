// Parent
"use strict"
function Animal(species, name, sound) {
    this.name = name;
    this.species = species;
    this.sound = sound
}

Animal.prototype.makeNoise = function () {
    console.log(`${this.sound.toUpperCase()}!!`);
};

module.exports = Animal;
