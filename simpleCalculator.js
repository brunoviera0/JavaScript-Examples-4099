// Prompt the user to input an operator and store it in the variable 'operator'
const operator = prompt('Enter operator (+, -, / or * ): ');

// Prompt the user to input the first number, convert it from string to a float, and store it in 'num1'
const num1 = parseFloat(prompt('Enter first number: '));

const num2 = parseFloat(prompt('Enter second number: '));

// Declare a variable 'result' to store the result of the operation
let result;

// Use an if-else statement to check which operator was entered and perform the corresponding operation
if (operator == '+') {
    // If the operator is '+', add num1 and num2 and store the result
    result = num1 + num2;
}
else if (operator == '-') {
    // If the operator is '-', subtract num2 from num1 and store the result
    result = num1 - num2;
}
else if (operator == '*') {
    // If the operator is '*', multiply num1 and num2 and store the result
    result = num1 * num2;
}
else {
    // If none of the previous operators matched, divide num1 by num2 and store the result
    result = num1 / num2;
}

// Output the result of the operation to the console using a template literal to format the output
console.log(`${num1} ${operator} ${num2} = ${result}`);
