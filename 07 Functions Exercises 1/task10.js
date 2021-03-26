//10.	Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.


function numOfApperances(string, letter) {

  var numOfApperances = 0;

  string = string.toLowerCase();
  letter = letter.toLowerCase();

  for (var i = 0; i < string.length; i++) {
    if (letter === string[i]) {
      numOfApperances += 1;
    }
  }
  return numOfApperances;
}

var string = 'A lorem ipsum dolor sit amet, consectetur adipiscing elit.'
var letter = 'a';

console.log(numOfApperances(string, letter));