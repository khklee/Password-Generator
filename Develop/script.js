// Assignment code here

// variable arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+"];

var generatePassword = function() {

  // ask for length of the password
  var lengthprompt = window.prompt("How long your password would be? Minimum 8 to maximum 128 characters.");

    // validate prompt answer
    if (lengthprompt < 8 || lengthprompt > 128) {
      window.alert("You need to provide a valid answer! Please try again.");
      return generatePassword();
    }
      // log a response
    console.log("The password length will be " + lengthprompt + ".");
    
    
  // continues to ask for character types
    var confirmLowercase = window.confirm("Click OK to confirm if you would like to include lowercase characters.");
    var confirmUppercase = window.confirm("Click OK to confirm if you would like to include uppercase characters.");
    var confirmNumeric = window.confirm("Click OK to confirm if you would like to include numeric characters.");
    var confirmSpeicial = window.confirm("Click OK to confirm if you would like to include special characters.");
       
      // validate confirm answers
      if (confirmLowercase === false && confirmUppercase === false && confirmNumeric === false && confirmSpeicial === false) {
        window.alert("You need to choose at least one character type! Please try again.");
        return generatePassword();
      }
  

    

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

      for (var i = 0; i = lengthprompt; i++) {
        randomPassword  += keyCharacters.charAt(Math.floor(Math.random() * lengthprompt));
        return password;
      
      } */
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


