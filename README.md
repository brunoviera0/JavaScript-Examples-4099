# JavaScript-Examples-4099

The goal of this assignment is to demonstrate and familiarize yourself with the power of JavaScript.

1. A unique aspect of JavaScript are first class functions. Functions take the highest priority in JavaScript, meaning that they can be passed as arguments in another function, returned from other functions, and assigned to variables. Please demonstrate how first class functions operate by writing a brief JavaScript program that creates a function that takes as an argument a name and another function that determines what the greeting will be. Lastly, write seperate functions that determine diferent greetings.

2. A closure in JavaScript occurs when a function remembers the variables from it's lexical scope, even after the outer function has finished executing. In this exercise, you'll create a function that returns another function to be a counter. Each time you call the returned function, it will increase a number and display it. Even though the first function has finished running, the inner function still remembers and updates the number. This demonstrates a closure because the inner function keeps access to the data from the outer function, allowing it to continue updating the number on each call.


# Validations

Task: 
Create javascript validation examples on the cloud

Why:
ensure that user input meets specific criteria before data is processed, which helps reduce unnecessary server requests and enhances any applications performance.

Examples made: **to run: node filename.js**

validpassword.js: 
ensures a strong password by checking for a minimum length of 8 characters, the presence of uppercase and lowercase letters, at least one number, one special character, and no spaces. 


validaddress.js:
ensures a valid address by enforcing a minimum length of 10 characters, requiring the address to start with a number, and allowing only letters, numbers, spaces, commas, and periods.
