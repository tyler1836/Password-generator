// Assignment code here
var characterAmountRangeEl = document.getElementById("characterAmountRange");
var characterAmountNumberEl = document.getElementById("characterAmountNumber");
var includeUppercaseEl = document.getElementById("includeUppercase");
var includeNumbersEl = document.getElementById("includeNumbers");
var includeSymbolsEl = document.getElementById("includeSymbols");


characterAmountNumberEl.addEventListener("input", syncCharacterAmount);
characterAmountRangeEl.addEventListener("input", syncCharacterAmount);

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


function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumberEl.value = value
  characterAmountRangeEl.value = value
}
