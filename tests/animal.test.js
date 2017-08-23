const assert = require('assert');
const Animal = require('../animal.js');

// Create a primal creature
const Larry = new Animal('Birdog', 'Larry', 'wharfffblurg');
assert(Larry.sound == 'wharfffblurg');

// Create a primal creature
const Jerry = new Animal('Frozen-Snail-Toad', 'Jerry', 'Lipplwock');
assert(Jerry.species == 'Frozen-Snail-Toad');
