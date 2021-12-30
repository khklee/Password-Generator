// Assignment code here

// variable declaration
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '1234567890';
const specialChar = '!@#$%^&*()_=+';
var charTypes = '';
var password = '';

var generatePassword = function() {

  // ask for length of the password
  var lengthprompt = prompt("How long your password would be? Minimum 8 to maximum 128 characters.");

    // validate prompt answer
    if (lengthprompt < 8 || lengthprompt > 128) {
      alert("You need to provide a valid answer! Please try again.");
      return generatePassword();
    }
      // log a response
    console.log("The password length will be " + lengthprompt + ".");
    
    
  // continues to ask for character types
  var confirmLowercase = confirm("Click OK to confirm if you would like to include lowercase characters.");
  var confirmUppercase = confirm("Click OK to confirm if you would like to include uppercase characters.");
  var confirmNumeric = confirm("Click OK to confirm if you would like to include numeric characters.");
  var confirmSpeicial = confirm("Click OK to confirm if you would like to include special characters.");
       
    // validate confirm answers
    if (!confirmLowercase && !confirmUppercase && !confirmNumeric && !confirmSpeicial) {
      alert("You need to choose at least one character type! Please try again.");
      return generatePassword();
    }
  
  var charTypes = [];

  // if one character types was choosed
    if (confirmLowercase) {
    var charTypes = lowerCase;
    }
  
  if (confirmUppercase) {
    var charTypes = upperCase;
    }

  if (confirmNumeric) {
    var charTypes = numbers;
  }

  if (confirmSpeicial) {
    var charTypes = specialChar;
  }

  /* if (confirmLowercase && confirmUppercase) {
    const charTypes = lowerCase.concat(upperCase);
  } */
  
  for (var i = 0; i < lengthprompt; i++) {
    password  += charTypes.charAt(Math.floor(Math.random() * charTypes.length));
  }
  return password;
};



    

  // ask for character types to include lowercase only, uppercase only or mixed?
  /* var caseOptionPrompt = window.prompt(
    "Would you like to include LOWERCASE only, UPPERCASE only, or MIXED together? Please enter one 1 for LOWERCASE, 2 for UPPERCASE, or 3 for MIXED."
    );
        
    caseOptionPrompt = parseInt(caseOptionPrompt);
  
      // lowercase only, uppercase only or mixed options
      switch (caseOptionPrompt) {
        case 1: 
          password.lowercase;
          break;
        case 2: 
          password.uppercase;
          break;
        case 3: 
          password.mixed;
          break;
      }  

      // log a response
      console.log("The password will include" + caseOptionPrompt + ".");
        

      // validate prompt answer
      if (caseOptionPrompt > 3 || caseOptionPrompt < 0) {
        window.alert("You need to provide a valid answer! Please try again.");
        return generatePassword();
      };
  
  // ask for character types to include numeric characters
  var numericPrompt = window.prompt("Would you like to include numeric characters? Enter 'Yes' or 'No' to choose.");
      
      // validate prompt answer
      if (numericPrompt === "" || numericPrompt === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return generatePassword();
      }

      numericPrompt = numericPrompt.toLocaleLowerCase();

      if (numericPrompt === "yes") {
        var numericPrompt = password.numbers;
        // log a response
        console.log("The password will include " + password.numbers + ".");
      
      } else {
        // log a response
        console.log("The password will not include " + password.numbers + ".");
      }
  
  // ask for character types to include speical characters
  var specialCharPrompt = window.prompt("Would you like to include special characters? Enter 'Yes' or 'No' to choose.");

      // validate prompt answer
      if (specialCharPrompt === "" || specialCharPrompt === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return generatePassword();
      }

      specialCharPrompt = specialCharPrompt.toLocaleLowerCase();

      if (specialCharPrompt === "yes") {
        var specialCharPrompt = password.speical;
        // log a response
        console.log("The password will include " + password.special + ".");
      
      } else {
        // log a response
        console.log("The password will not include numbers" + password.special + ".");
      } 

      // generate random password

      
      } */


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


