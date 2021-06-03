// 5.	Write a function to convert a string to its abbreviated form. 

// 	"John Snow" -> 	"John S."

var inputString = 'John Snow';

function abbreviatedForm(string) {
  var abbreviatedString = string.split(' ');
  var firstWord = abbreviatedString[0];
  var secondWord = abbreviatedString[1][0] + '.';
  return firstWord + ' ' + secondWord;
}

console.log(abbreviatedForm(inputString));