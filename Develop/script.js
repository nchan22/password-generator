// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var charset = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

function generatePassword() {
  passwordCharSet = "";

  var length = window.prompt(
    "Enter a number from 8 to 128 for password length."
  );

  var lowercase = window.confirm("Would you like to use lowercase letters?");
  if (lowercase == true) {
    passwordCharSet += lowercase;
  }

  var uppercase = window.confirm("Would you like to use uppercase letters?");
  if (uppercase == true) {
    passwordCharSet += uppercase;
  }

  var symbols = window.confirm("Would you like to use symbols?");
  if (symbols == true) {
    passwordCharSet += symbols;
  }

  var numbers = window.confirm("Would you like to use numbers?");
  if (numbers == true) {
    passwordCharset += numbers;
  }

  for (let i = 0; i < length; i++) {
    password +=
      passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)];
  }
  return password;
}

console.log(generatePassword());

// TODO make prompts happen ONLY when button is pressed
// TODO make password only generated when at least 1 or more of the prompts are true
// TODO make created password show up in the box
