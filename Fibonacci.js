// Prompt the user to enter the number of terms for the Fibonacci series and store it as an integer in 'num'
const num = parseInt(prompt('enter num terms: '));

// Initialize the first two terms of the Fibonacci series
let n1 = 0, n2 = 1, nextTerm;

// Print a message to indicate the Fibonacci series is about to be displayed
console.log('Fibonacci Series:');

// Start a loop that runs 'num' times to generate the Fibonacci sequence
for (let i = 1; i <= num; i++) 
{
    // Print the current Fibonacci number (n1)
    console.log(n1);
    
    // Calculate the next term in the sequence by adding the previous two numbers
    nextTerm = n1 + n2;
    
    // Move the current second number to the first position (n1 now becomes n2)
    n1 = n2;
    
    // Move the new term to the second position (n2 now becomes nextTerm)
    n2 = nextTerm;
}
