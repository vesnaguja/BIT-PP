/*4.	Write a function that deletes a character from the given position in the string. 
Input: “Goodd morning!”, 3 
Output: “Good morning!”
*/

function deleteCharacter(string, position) {
  var newString = '';

  for (var i = 0; i < position; i++) {
    newString += string[i];
  }

  for (var i = position + 1; i < string.length; i++) {
    newString += string[i];
  }
  
  return newString;
}


console.log(deleteCharacter('Goodd morning!', 3));