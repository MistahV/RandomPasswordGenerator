
function generatePassword() {
 
  /* Arrays to be used for random password */
  let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '?','+'];
  let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  let allChars = ['']

  function chooseLength() {
  var length = prompt("How long do you want your random password to be? (MIN: 8 characters  MAX: 128 characters)", "");
  length = parseInt(length);
    if (length < 8) {
      alert('Your password length is too short! Try again!');
      chooseLength();
    }
    else if (length > 128) {
      alert('Your password is too long! Try again!');
      chooseLength();
    }
    else if (isNaN(length) === true) {
      alert('You must enter a number! Try again!');
      chooseLength();
    }
    else {
      console.log(length);
      return length
    }
  };
  var passwordLength = chooseLength();

  

  /* Function to validate user input and include lowercase characters in randomized password if user answers Yes to prompt */
  function chooseLower() {
    var passwordLower = prompt("Do you want your random password to have lowercase letters?", "");
    passwordLower.toLowerCase();
    if (passwordLower === 'yes') {
      allChars.push(lowerCase);
    } 
    else if (passwordLower === 'no') {
      
    } 
    else {
      alert('You must enter "Yes" or "No"! Try again!');
      chooseLower();
    }
  };
  
  /* Function to validate user input and include uppercase characters in randomized password if user answers Yes to prompt */
  function chooseUpper() {
    var passwordUpper = prompt("Do you want your random password to have uppercase letters?", "");
    passwordUpper.toLowerCase();
    if (passwordUpper === 'yes') {
      allChars.push(upperCase);
    } 
    else if (passwordUpper === 'no') {
      
    } 
    else {
      alert('You must enter "Yes" or "No"! Try again!');
      chooseUpper();
    }
  };
  
  /* Function to validate user input and include special characters in randomized password if user answers Yes to prompt */
  function chooseSpecial() {
    var passwordSpecial = prompt("Do you want your random password to have special characters?", "");
    passwordSpecial.toLowerCase();
    if (passwordSpecial === 'yes') {
      allChars.push(specialChar);
    } 
    else if (passwordSpecial === 'no') {
      
    } 
    else {
      alert('You must enter "Yes" or "No"! Try again!');
      chooseSpecial();
    }
  };
  
  /* Function to validate user input and include numbers in randomized password if user answers Yes to prompt */
  function chooseNumber() {
    var passwordNumber = prompt("Do you want your random password to have numbers?", "");
    passwordNumber.toLowerCase();
    if (passwordNumber === 'yes') {
      allChars.push(number);
    } 
    else if (passwordNumber === 'no') {

    } 
    else {
      alert('You must enter "Yes" or "No"! Try again!');
      chooseNumber();
    }
  };
  
  chooseLower();
  chooseUpper();
  chooseSpecial();
  chooseNumber();
  
/* Function that randomizes elements from the specified array */
 function getRandom() {
  let index = allChars[Math.floor(Math.random() * allChars.length)];
  return index
 };

  let password = [];
  /* runs the function the inputted number of times to get a random string of characters from the arrays */
  for (i = 0; i < passwordLength; i++) {
   password.push(getRandom());
  }
   return password.join("")

};


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');



// Write password to the #password input
function writePassword() {
  var randomPassword = generatePassword();
  var passwordText = document.querySelector('#password');
  
  return passwordText.value = randomPassword;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);























