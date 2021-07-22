
function generatePassword() {
 
  let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '?','+'];
  let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  let allchars = lowerCase.concat(upperCase);

  var passwordLength = prompt("How long do you want your random password to be? (MIN: 8 characters  MAX: 128 characters)", "")
  passwordLength = parseInt(passwordLength)
  if (passwordLength < 8) {
    alert('Your password length is too short!')
  }
  else if (passwordLength > 128) {
    alert('Your password is too long!')
  };
  
  /*
  var passwordLower = prompt("Do you want your random password to have lowercase letters?", "")
  if (passwordLower == 'yes') {

  }

  /*
  var passwordUpper = prompt("Do you want your random password to have uppercase letters?", "")
  var passwordSpecial = prompt("Do you want your random password to have special characters?", "")
  var passwordNumber = prompt("Do you want your random password to have numbers?", "")
  */

  let password = [];

  function getRandom(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }


  /* gets random lowercase letter */
  password.push(getRandom(lowerCase));
  /* gets random uppercase letter */
  password.push(getRandom(upperCase));
  /* gets random special character */
  password.push(getRandom(specialChar));
  /* gets random number */
  password.push(getRandom(number));
  /* runs the function 8 times to get a random string of characters from the arrays */
  for (i = 0; i < passwordLength; i++) {
   password.push(getRandom(allchars));
  }
  return password.join("")
  }


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  
  return passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);























