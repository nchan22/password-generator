// Assignment code here
var charset = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

var generatePassword = function () {
  // prompt asking number of characters
  var password = "";

  var charLength = window.prompt(
    "How many characters would you like your password to be? Choose between 8 and 128"
  );

  // if user choose character less than 8 or more than 128, no input or is not a number.

  while (
    isNaN(charLength) ||
    Number.parseInt(charLength) < 8 ||
    Number.parseInt(charLength) > 128 ||
    charLength === "" ||
    charLength === null
  ) {
    console.log(Number.parseInt(charLength) !== NaN);
    window.alert("Password must be between  8 and 128 characters. Try again!");
    var charLength = window.prompt(
      "How many characters would you like your password to be? Choose between 8 and 128"
    );
  }

  // prompt for asking if the user wants numbers in the password
  var confirmNumbers = window.confirm("Will your password have numbers in it?");

  if (confirmNumbers) {
    password += charset.number;
  }

  // prompt for asking if the user wants lowerCase letters in the password
  var confirmLowerCase = window.confirm(
    "Will your password have lowercase letters in it?"
  );

  if (confirmLowerCase) {
    password += charset.lowerCase;
  }

  // prompt for asking if the user wants  uppercase letters in the password
  var confirmUpperCase = window.confirm(
    "Will your password have uppercase letters in it?"
  );

  if (confirmLowerCase) {
    password += charset.upperCase;
  }

  // prompt for asking if the user wants special Characters in the password?
  var symbolsAndCharacters = window.confirm(
    "Will your password have any special Characters in it?"
  );

  if (symbolsAndCharacters) {
    password += charset.symbol;
  }

  // while loop if user skips numbers & uppercase & lowercase & special characters
  while (
    !confirmNumbers &&
    !confirmLowerCase &&
    !confirmUpperCase &&
    !symbolsAndCharacters
  ) {
    window.alert(
      "You must select at least one character type required in the password!"
    );

    var confirmNumbers = window.confirm(
      "Will your password have numbers in it?"
    );
    password += charset.number;

    var confirmLowerCase = window.confirm(
      "Will your password have lowercase letters in it?"
    );
    password += charset.lowerCase;

    var confirmUpperCase = window.confirm(
      "Will your password have uppercase letters in it?"
    );
    password += charset.upperCase;

    var symbolsAndCharacters = window.confirm(
      "Will your password have any special Characters in it?"
    );
    password += charset.symbol;
  }
  var randomPassword = [];
  for (var i = 0; i < charLength; i++) {
    randomPassword += password[Math.floor(Math.random() * password.length)];
  }
  return randomPassword;
};

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
