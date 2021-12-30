// Assignment code here

// variable declaration
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '1234567890';
const specialChar = '!@#$%^&*()_=+';
var charTypes = '';
var password = '';
var confirmLowercase;
var confirmUppercase;
var confirmNumeric;
var confirmSpeicial;

var generatePassword = function() {

  // ask for length of the password
  var lengthprompt = prompt('How long your password would be? Minimum 8 to maximum 128 characters.');

    // validate prompt answer
    if (lengthprompt < 8 || lengthprompt > 128) {
      alert('You need to provide a valid answer! Please try again.');
      return generatePassword();
    }
      // log a response
    console.log('The password length will be ' + lengthprompt + '.');
    
    
  // continues to ask for character types
  askCharTypes();

    // validate confirm answers
    if (!confirmLowercase && !confirmUppercase && !confirmNumeric && !confirmSpeicial) {
      alert('You need to choose at least one character type! Please try again.');
      return askCharTypes();
    }
  
  // if one character type was included
    if (confirmLowercase) {
     charTypes += lowerCase;
    }
  
  if (confirmUppercase) {
     charTypes += upperCase;
    }

  if (confirmNumeric) {
     charTypes += numbers;
  }

  if (confirmSpeicial) {
     charTypes += specialChar;
  }

  for (var i = 0; i < lengthprompt; i++) {
    password  += charTypes.charAt(Math.floor(Math.random() * charTypes.length));
  }
  return password;
};

function askCharTypes () {
  confirmLowercase = confirm('Click OK to confirm if you would like to include lowercase characters.');
  confirmUppercase = confirm('Click OK to confirm if you would like to include uppercase characters.');
  confirmNumeric = confirm('Click OK to confirm if you would like to include numeric characters.');
  confirmSpeicial = confirm('Click OK to confirm if you would like to include special characters.');
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
