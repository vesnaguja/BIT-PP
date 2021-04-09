// 1.	Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"


function insertString(inputString, insert, position = 0) {
  
  var newString = '';
  
  for (var i = 0; i < inputString.length; i++) {
    if (i === position) {
      newString = newString + insert;
    }
    newString += inputString[i];
  }
  return newString;
}
var string = 'My random string';
var insert = 'JS ';
var position = 10;

var ubacenInsert = insertString(string, insert, position);

console.log(ubacenInsert);



