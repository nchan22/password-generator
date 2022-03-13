// Assignment code here
var charset = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

function generatePassword() {
  charset = "";

  // add maybe a function if user doesn't add in a number or it is less than 7 or greater than 129 ?

  // somehow make it so these prompts don't show up when page is first loaded and only when the button is clicked.  maybe an addEventListener function?

  if (length >= 7 || length <= 129) {
    var length = window.prompt(
      "Enter a number from 8 to 128 for password length."
    );
    // break;
    // } else {
    //   var length = window.prompt(
    //     "Enter a number from 8 to 128 for password length."
    //   );
    // }

    var lowercase = window.confirm("Would you like to use lowercase letters?");
    if (lowercase == true) {
      charset += lowercase;
    }

    var uppercase = window.confirm("Would you like to use uppercase letters?");
    if (uppercase == true) {
      charset += uppercase;
    }

    var symbols = window.confirm("Would you like to use symbols?");
    if (symbols == true) {
      charset += symbols;
    }

    var numbers = window.confirm("Would you like to use numbers?");
    if (numbers == true) {
      charset += numbers;
    }

    for (let i = 0; i < length; i++) {
      password += charset[Math.floor(Math.random() * charset.length)];
    }
    return password;
  }
}
// console.log(generatePassword());

// TODO make prompts happen ONLY when button is pressed
// TODO make password only generated when at least 1 or more of the prompts are true
// TODO make created password show up in the box
// TODO need a reset button when button is clicked again and repeat

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

// var charset = {
//   lowercase: "abcdefghijklmnopqrstuvwxyz",
//   uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   number: "0123456789",
//   symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
// };

// function generatePassword() {
//   charset = "";

//   // add maybe a function if user doesn't add in a number or it is less than 7 or greater than 129 ?

//   // somehow make it so these prompts don't show up when page is first loaded and only when the button is clicked.  maybe an addEventListener function?

//   if (length >= 7 || length <= 129) {
//     var length = window.prompt(
//       "Enter a number from 8 to 128 for password length."
//     );
//     // break;
//     // } else {
//     //   var length = window.prompt(
//     //     "Enter a number from 8 to 128 for password length."
//     //   );
//     // }

//     var lowercase = window.confirm("Would you like to use lowercase letters?");
//     if (lowercase == true) {
//       charset += lowercase;
//     }

//     var uppercase = window.confirm("Would you like to use uppercase letters?");
//     if (uppercase == true) {
//       charset += uppercase;
//     }

//     var symbols = window.confirm("Would you like to use symbols?");
//     if (symbols == true) {
//       charset += symbols;
//     }

//     var numbers = window.confirm("Would you like to use numbers?");
//     if (numbers == true) {
//       charset += numbers;
//     }

//     for (let i = 0; i < length; i++) {
//       password += charset[Math.floor(Math.random() * charset.length)];
//     }
//     return password;
//   }
// }
// console.log(generatePassword());

// // TODO make prompts happen ONLY when button is pressed
// // TODO make password only generated when at least 1 or more of the prompts are true
// // TODO make created password show up in the box
// // TODO need a reset button when button is clicked again and repeat
