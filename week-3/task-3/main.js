// main.js

// Import the custom module
const customModule = require('./customModule');

// Call the greetPerson function from the custom module
customModule.greetPerson('John');

// Call the addNumbers function from the custom module
const result = customModule.addNumbers(5, 3);
console.log(`The sum of 5 and 3 is ${result}.`);
