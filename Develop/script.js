// Assignment code here
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

  // ask for character types to include lowercase only, uppercase only or mixed?
  var caseOptionPrompt = window.prompt(
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
      console.log("The password will include " + caseOptionPrompt + ".");

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
        var numericPrompt = password.numbers
        // log a response
        console.log("The password will include numbers");
      
      } else {
        // log a response
        console.log("The password will not include numbers");
      }


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


var password = { 
  lowercase: "abcdefghijklmnopqrstuvwxyz", 
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  mixed: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "1234567890"

};