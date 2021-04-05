// 9. Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

//     "My random string", "_" -> "My_random_string"
//     "My random string", "+" -> "My+random+string"
//     "My random string" -> "My-random-string"

function separatorInsteadOfSpaces(string, separator) {
  var newString = '';

  if(!!separator === false) {
    separator = '-';
  } 
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      newString += separator;      
    }
    else {
      newString += string[i];
    }
  }
  return newString;
}


var a = "My random string";
var b = '+';

console.log(separatorInsteadOfSpaces(a, b));