/* 6.	Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.*/

function positionOfOccurrence(string, letter) {
  var position = 0;

  for (i = string.length - 1; i > 0; i--) {
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
var letter = 'n';

console.log(positionOfOccurrence(string, letter));