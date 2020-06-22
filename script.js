// Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//arrays
var upper = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lower = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

//variables
var lengthinput = "";
var upperinput;
var lowerinput;
var numbersinput;
var symbolsinput;


function generatePassword() {
//1. how long (8-128)
  var lengthinput = (prompt("How many chracters would you like in your password? (8-128 inclusive)"));

  //while loop for checking 8-128, error if outside 8-128 or null; confirm input
  while(lengthinput <= 8 || lengthinput >= 128) {
  alert("Password length must be between 8-128 characters Try again");
  var lengthinput = (prompt("How many chracters would you like in your password? (8-128 inclusive)"));
  } 

  //display number of characters 
  alert(`Your password will have ${lengthinput} characters. Click OK to choose some more options for your password.`);

//2. other parameters: upper, lower, numbers, symbols
  var upperinput = confirm("upper case letter? Click OK for Yes; Click Cancel for NO");
  var lowerinput = confirm("lower case letters? Click OK for Yes; Click Cancel for NO");
  var numbersinput = confirm("numbers? Click OK for Yes; Click Cancel for NO");   
  var symbolsinput = confirm("symbols? Click OK for Yes; Click Cancel for NO");

  // Loop if none of the options are chosen
  while(upperinput === false && lowerinput === false && numbersinput === false && symbolsinput === false) {
  alert("You must choose at least one parameter, or in other words, click OK on at least one of the options");
  var upperinput = confirm("upper case letter? Click OK for Yes; Click Cancel for NO");
  var lowerinput = confirm("lower case letters? Click OK for Yes; Click Cancel for NO");
  var numbersinput = confirm("numbers? Click OK for Yes; Click Cancel for NO");   
  var symbolsinput = confirm("symbols? Click OK for Yes; Click Cancel for NO");
  }

//3. Stringing password characters
  var newpassword = [];
  if (upperinput) {
    newpassword.concat(upper);
  }
  if (lowerinput) {
    newpassword.concat(lower);
  }
  if (numbersinput) {
    newpassword.concat(number);
  }
  if (symbolsinput) {
    newpassword.concat(symbol);
  }

  for (var i = 0; i <= lengthinput; i++) {
    var newpassword = newpassword[Math.floor(Math.random() * newpassword.length)];
    return(newpassword);      
  }
}