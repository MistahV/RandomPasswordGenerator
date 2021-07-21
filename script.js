
function generatePassword() {
 
  let lowerCase = ['a', 'b', 'c'];
  let upperCase = ['A', 'B', 'C', 'D'];
  let specialChar = [];
  let numbers = [];
  let allchars = lowerCase.concat(upperCase);
  var passwordLength = prompt("How long do you want your random password to be? (MIN: 8 characters  MAX: 128 characters)", "")

  let password = [];
  function getRandom(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }
  /* gets random lowercase letter */
  password.push(getRandom(lowerCase));
  password.push(getRandom(upperCase));
  /* runs the function 8 times to get a random string of characters from the arrays */
  for (i = 0; i < passwordLength - 2; i++) {
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
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);























