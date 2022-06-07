var lowLetters = "abcdefghijklmnopqrstuvwxyz"
var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var nums = "0123456789"
var special = "!@#$%^&*()_-+={[}]<,>.?/~`:;"
var complete = ""; //an empty string that random characters will be added to

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var passwordLength = prompt("Please choose the length of your password between 8 and 128 characters.")

  if (passwordLength < 8|| passwordLength > 128){
    alert("Error! Please enter a number between 8 and 128.");
    return;

   } else {
      var lowercase = confirm ("Do you want lowercase letters in your password?")
      if(lowercase){//if confirmed, lowercase letters are added to "complete"
        complete += lowLetters;
      }
    }
    var upperCase = confirm("Do you want uppercase letters in your password?")
    if (upperCase){
      complete += upLetters
    }
    var numbers = confirm("Do you want numbers in your password?")
      if (numbers){
        complete += nums
      }
    var specLet = confirm("Do you want specal characters in your password?")
      if(specLet){
        complete += special
      };

      if ( //if the user does not choose any of the character types, the function is called again
        lowercase === false &&
        upperCase === false &&
        numbers === false &&
        specLet === false
      ) {
        alert("Please choose at least one character type.");
        generatePassword();
      }
    

var finished = "";//creating the random password

for(var i = 0; i <passwordLength; i++){
  finished += complete.charAt(Math.floor(Math.random() * complete.length))//adds the requested character types from the user

}
  return finished
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);