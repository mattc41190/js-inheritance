const inquirer = require('inquirer');
const Dog = require('./dog.js');

const questions = [{
  name: 'dogName',
  type: 'input',
  message: 'What would you like to name your dog?'
}];


inquirer.prompt(questions).then((answers) => {
  dog = new Dog(answers.dogName)
  console.log(`You named your dog: ${dog.name}`);
  console.log(`${dog.name} says ${dog.makeNoise()}`);
})
