// Parent
"use strict"
function Animal(name, species, sound) {
    this.name = name;
    this.species = species;
    this.sound = sound
}

Animal.prototype.makeNoise = function () {
    return `${this.sound.toUpperCase()}!!`;
};

const AnimalPrototype = {
  makeNoise : function() {
    return `${this.sound.toUpperCase()}!!`;
  }
}

module.exports = {Animal, AnimalPrototype};
