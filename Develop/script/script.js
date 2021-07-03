// Assignment code here

var n = ["0", "1","2", "3", "4", "5", "6", "7", "8", "9"]
var s = ["!","@","#","$","%","&","*"]
var x = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var y = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var z = [];
var pass = [];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var characters = parseInt(prompt("How many characters would you like?"))
  if (characters > 8 && characters < 128){
    var includeUppercase = confirm("Would you like to include Uppercase?");
    var numbers = confirm("Would you like to include numbers?");
    var symbols = confirm("Would you like to include symbols");
   
   
    if (includeUppercase === true){
        z = x.concat(y);
     
      }
      if (numbers === true){
        z = z.concat(n);
      } 
      if (symbols === true){
        z = z.concat(s);
      }

      else if (numbers !== true && symbols !== true && includeUppercase !== true) {
        alert("Please select one of the options.")
        return;
      }
      

      for (let i = 0; i < characters; i++) {
        var random = z[Math.floor(Math.random()* z.length)];
        pass.push(random);
     }
    
    return pass.join('');
  }
  
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
