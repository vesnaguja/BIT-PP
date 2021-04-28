/*3.	Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’ 
Output: “Good morning” 
*/

function insertCharacter(string, character, position) {
  position = position - 1;
  var newString = '';

  for (var i = 0; i < position; i++) {
    newString += string[i];
  }

  newString += character;

  for (var i = position; i < string.length; i++) {
    newString += string[i];
  }
  return newString;
}


console.log(insertCharacter('Goo morning', 'd', 4));