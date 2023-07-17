// customModule.js

// Function to greet a person
function greetPerson(name) {
    console.log(`Hello, ${name}! Welcome to the custom module.`);
  }
  
  // Function to add two numbers
  function addNumbers(a, b) {
    return a + b;
  }
  
  // Export the functions to make them accessible from other modules
  module.exports = {
    greetPerson,
    addNumbers,
  };
  