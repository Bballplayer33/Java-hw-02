// Assignment Code
var generateBtn = document.querySelector("#generate");
//password values
var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+123456789";
var password = "";
//  a. password length 8 - 128
//  b. lowercase, uppercase, numbers, special characters
//2. validate the input 
//3.generate password based off criteria

function generatePassword() {
  var userChoice = ("0123456789")
  console.log(generatePassword)
  var userChoice = window.prompt("Enter desired password length", "8-128 characters");
  var length = userChoice;
    charset = (values);
    retVal = "";
    
    if (!userChoice) {
      return
    }

    for (var i = 0, n = charset.length; i < length; ++i){
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    if (userChoice <8) {
      !userChoice; 
      window.alert("Character value too low, please click Generate Password and try again");
      return;
    }
    else if (userChoice >128) {
      !userChoice; 
      window.alert("Character value too high, please click Generate Password and try again");
      return;
    }
    
    //else if (userChoice) {
    //  !userChoice;
     // window.alert("Password length not selected, please try again");
    //  return;
    //}
     
    if (!window.confirm("Click 'OK' to confirm using special characters")) {
      window.alert("Invalid response, please try again & confirm");
      return;
    }
     if (!window.confirm("Click 'OK' to confirm using numeric characters")) {
      window.alert("Invalid response, please try again & confirm")
       return;
     }
    if (!window.confirm("Click 'Ok' to confirm using lowercase characters")) {
      window.alert("Invalid response, please try again & confirm")
      return;
    }
    if (!window.confirm("Click 'Ok' to confirm using uppercase characters")) {
      window.alert("Invalid response, please try again & confirm")
      return;
    }

   return retVal;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
