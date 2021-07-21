// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    
  var passwordLength = prompt("How long do you want your random password to be? (MIN: 8 characters  MAX: 128 characters)", "")

  if (passwordLength.value < 8 || passwordLength.value > 128 || passwordLength.value !== Number) {
     alert("ERROR! You must select a numeric length between 8 and 128 characters.");
     console.log(passwordLength.value)
     /* Need to find way to ensure alert only shows when a condition is violated */
     /* Need to find way to return to original prompt after Error message */
  } else {
     const i = passwordLength.value
     /* Need to find way to pass input for length into loop (?) for generating password */
  }
  
    var lowercasePrompt = prompt("Do you want lowercase letters in your random password? (Yes or No)")
    if (lowercasePrompt == "yes") {
        console.log("YES for lowercase!")
      /* Need to find way to pass input into loop for generating password */
    }

    var uppercasePrompt = prompt("Do you want uppercase letters in your random password? (Yes or No)")
    if (uppercasePrompt == "yes") {
        console.log("YES for uppercase!")
        /* Need to find way to pass input into loop for generating password */
    }

    var numericPrompt = prompt("Do you want numbers in your random password? (Yes or No)")
    if (numericPrompt == "yes") {
        console.log("YES for numbers!")
        /* Need to find way to pass input into loop for generating password */
    }

    var specialPrompt = prompt("Do you want special characters in your random password? (Yes or No)")
    if (specialPrompt == "yes") {
        console.log("YES for special characters!")
        /* Need to find way to pass input into loop for generating password */
    }
  

    var characters = ['abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=<>?']; 
    var randomPass = "";

    for (var i = 5; i < characters.length; i++) {
      randomPass = characters.charAt(Math.floor(Math.random(i) * characters.length))
    }
    return randomPass;
  }

    passwordText.value = password;

}