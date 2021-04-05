/*5.	Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1.
 */


function positionOfOccurrence(string, letter) {
  
  var position = 0;

  for (i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      position = i;
      break;
    } else {
      position = -1;
    }
  }
  return position;
}

var string = "My random string";
var letter = 'w';

console.log(positionOfOccurrence(string, letter));

///////////////////////////////////////////////////////

function positionOfOccurrence(string, letter) {
  for (i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      return i;
    }
  }
  return -1;
}

var string = "My random string";
var letter = 'n';

console.log(positionOfOccurrence(string, letter));
