// 4.	Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function letterInString(string, letter) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
  
    if (string[i] === letter) {
      count++;
    }
  }
  return count;
}

var string = "My random string";
var letter = 'n';

console.log(letterInString(string, letter));

