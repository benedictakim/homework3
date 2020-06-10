//==============start pseudocode outline=======================================================

//prompts for criteria
//1. how long (8-128)
//if from 8-128, else prompt with error message "enter a number from 8-128 inclusive"
//2. upper, lower, numbers, symbols
//if none chosen, "error message: chose at least one criteria"


//variables for password character options: for UPPER, lower, numbers, symbols


//function to generate password with the criteria


//=========end pseudocode outline==========================================================



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
