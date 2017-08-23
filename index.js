const inquirer = require('inquirer');
const Dog = require('./dog.js');
const Cat = require('./cat.js');
const Sheep = require('./sheep.js');

const questions = [
	{
		name: 'animal',
		type: 'list',
		message: 'What would you like to create?',
		choices: ['Dog', 'Cat', 'Sheep']
	}, {
		when: function(response) {
			return response.animal == 'Dog';
		},
		name: 'dogName',
		type: 'input',
		message: 'What would you like to name your dog?'
	}, {
		when: function(response) {
			return response.animal == 'Cat';
		},
		name: 'catName',
		type: 'input',
		message: 'What would you like to name your cat?'
	}, {
		when: function(response) {
			return response.animal == 'Sheep';
		},
		name: 'sheepName',
		type: 'input',
		message: 'What would you like to name your sheep?'
	}
];

inquirer.prompt(questions).then((answers) => {
	if (answers.dogName) {
		dog = new Dog(answers.dogName)
		console.log(`You named your dog: ${dog.name}`);
        console.log(`Your dog says ${dog.makeNoise()}`);

	} else if (answers.catName) {
		cat = new Cat(answers.catName)
		console.log(`You named your cat: ${cat.name}`);
		console.log(`${cat.name} says ${cat.makeNoise()}`);
  }
    else if (answers.sheepName) {
		sheep = new Sheep(answers.sheepName)
		console.log(`You named your sheep: ${sheep.name}`);
		console.log(`${sheep.name} says ${sheep.makeNoise()}`);
	}
})
