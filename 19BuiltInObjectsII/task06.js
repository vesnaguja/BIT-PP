// 6.	Write a function that adds string to the left or right of string, by replacing it’s characters.

// 	'0000', ‘123’, 'l' -> 0123 
// '00000000', ‘123’, 'r' -> 12300000


var firstString = '00000';
var secondString = '123';
var sideOfReplacement = 'r';

function concatStrings(string1, string2, side) {
  var newString = '';
  var length = string1.length - string2.length;

  if (side === 'l') {
    newString = string1.substring(0, length) + string2;
  } else if (side === 'r') {
    newString = string2 + string1.substring(string2.length, string1.length);
  }
  return newString;
}

console.log(concatStrings(firstString, secondString, sideOfReplacement));