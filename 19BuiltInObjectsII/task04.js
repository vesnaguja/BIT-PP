// 4.	Write a function to split a string and convert it into an array of words.

// 	"John Snow" -> [ 'John', 'Snow' ]

// You should use loops only for the 4 and 9 assignment, all others can be solved using built-in object methods. 

var string = 'John Snow';

function stringToArray(s) {
  var newArray = [];
  newArray = s.split(' ');
  return newArray;
}

console.log(stringToArray(string));