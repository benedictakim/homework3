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
var upperinput;
var lowerinput;
var numbersinput;
var symbolsinput;


function generatePassword() {
//1. how long (8-128)
  var lengthinput = prompt("How many chracters would you like in your password? (8-128 inclusive)");

  //while loop for checking 8-128, error if outside 8-128 or null; confirm input
  if (lengthinput < 8 || lengthinput > 128) {
  alert("Password length must be between 8-128 characters Try again");
  lengthinput = prompt("How many chracters would you like in your password? (8-128 inclusive)");
  } 

  //display number of characters 
  alert(`Your password will have ${lengthinput} characters. Click OK to choose some more options for your password.`);

//2. other parameters: upper, lower, numbers, symbols
  upperinput = confirm("upper case letter? Click OK for Yes; Click Cancel for NO");
  lowerinput = confirm("lower case letters? Click OK for Yes; Click Cancel for NO");
  numbersinput = confirm("numbers? Click OK for Yes; Click Cancel for NO");   
  symbolsinput = confirm("symbols? Click OK for Yes; Click Cancel for NO");

  // Loop if none of the options are chosen
  if (upperinput === false && lowerinput === false && numbersinput === false && symbolsinput === false) {
  alert("You must choose at least one parameter, or in other words, click OK on at least one of the options");
    upperinput = confirm("upper case letter? Click OK for Yes; Click Cancel for NO");
    lowerinput = confirm("lower case letters? Click OK for Yes; Click Cancel for NO");
    numbersinput = confirm("numbers? Click OK for Yes; Click Cancel for NO");   
    symbolsinput = confirm("symbols? Click OK for Yes; Click Cancel for NO");
  }

//3. Stringing password characters [needs to be debugged, can't figure it out]
  var stringpassword =[];
  if (upperinput == true && lowerinput == true && numbersinput == true && symbolsinput == true) {
    stringpassword = stringpassword.concat(upper, lower, number, symbols);
  }
  else if (upperinput == true && numbersinput == true && symbolsinput == true) {
      stringpassword.concat(upper, number, symbols);
  }
  else if (upperinput == true && lowerinput == true && numbersinput == true) {
    stringpassword.concat(upper, lower, number);
  }
  else if (upperinput == true && lowerinput == true && symbolsinput == true) {
    stringpassword.concat(upper, lower, symbols);
  }
  else if (lowerinput == true && numbersinput == true && symbolsinput == true) {
    stringpassword.concat(lower, number, symbols);
  }
  else if (numbersinput == true && symbolsinput == true) {
    stringpassword.concat(number, symbols);
  }
  else if (upperinput == true && symbolsinput == true) {
    stringpassword.concat(upper, symbols);
  }
  else if (lowerinput == true && symbolsinput == true) {
    stringpassword.concat(lower, symbols);
  }
  else if (upperinput == true && lowerinput == true) {
    stringpassword.concat(upper, lower);
  }
  else if (upperinput == true && numbersinput == true) {
    stringpassword.concat(upper, number);
  }
  else if (lowerinput == true && numbersinput == true) {
    stringpassword.concat(lower, number);
  }
  else if (upperinput == true)  {
    stringpassword = upper;
  }
  else if (lowerinput == true)  {
    stringpassword = lower;
  }
  else if (numbersinput == true)  {
    stringpassword = number;
  }
  else if (symbolsinput == true)  {
    stringpassword = symbols;
  }

  var newpassword = [];
  for (var i = 0; i < lengthinput; i++) {
    var pickstring = stringpassword[Math.floor(Math.random() * stringpassword.length)];
    newpassword.push(pickstring);
  }
  password = newpassword.join("");
  return(password);  
};