const readline = require('readline');  //allows the program to read input from cmd line

const rl = readline.createInterface({
    input: process.stdin,  //input is stdin
    output: process.stdout //output is terminal
}); //interface for input and output

//function to validate the password
function validatePassword(password) {
    
    //password must be more than 8 characters
    if (password.length < 8) {
        return "Password too short!";
    }

    //regular expressions to test the other criteria for a valid password:

    //check if the password contains at least one digit (0-9)
    const hasNumber = /\d/;

    //check if the password contains at least one uppercase letter (A-Z)
    const hasUpperCase = /[A-Z]/;

    //check if the password contains at least one lowercase letter (a-z)
    const hasLowerCase = /[a-z]/;

    //check if the password contains at least one special character
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

    //check if the password contains any whitespace
    const hasWhitespace = /\s/;

    //apply validation rules by testing for each of the criteria

    //check if the password contains any whitespace.if it does yes, an error message will return
    if (hasWhitespace.test(password)) {
        return "Password should not contain any spaces.";
    }
    if (!hasNumber.test(password)) {
        return "Password should include at least one number.";
    }
    if (!hasUpperCase.test(password)) {
        return "Password should include at least one uppercase letter.";
    }
    if (!hasLowerCase.test(password)) {
        return "Password should include at least one lowercase letter.";
    }
    if (!hasSpecialChar.test(password)) {
        return "Password should include at least one special character.";
    }
    return "Password is strong!";
}

//prompt user for stdin
rl.question('Enter a password: ', (password) => {
    
    //call validatepassword on the stdin
    console.log(validatePassword(password));
    rl.close();
});
