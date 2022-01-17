// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  console.log(generatePassword)
  
  return "Test"
}
//1. prompt user
//  a. password length 8 < 128
//  b. lowercase, uppercase, numbers, special characters
//2. validate the input 
//3.generate password based off criteria


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
