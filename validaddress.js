const readline = require('readline'); //allows the program to read input from cmd line

const rl = readline.createInterface({
    input: process.stdin, //input is stdin
    output: process.stdout//output is terminal
}); //interface for input and output

//call this to validate address
function validateAddress(address) {
    //must be more than 10 characters
    if (address.length < 10) {
        return "Address too short! It should be at least 10 characters.";
    }

    //address must start with a number
    const startsWithNumber = /^[0-9]/;

    //no special characters in the address
    const validChars = /^[0-9a-zA-Z\s,.]+$/;

    //test each case of criteria
    if (!startsWithNumber.test(address)) {
        return "Address should start with a number.";
    }

    if (!validChars.test(address)) {
        return "Address contains invalid characters. Only letters, numbers, spaces, commas, and periods are allowed.";
    }

    return "Address is valid!";
}

//prompt user for stdin
rl.question('Enter an address: ', (address) => {

    //call validateAddress on stdin 
    console.log(validateAddress(address));
    rl.close();
});
