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


// bez 'split' built-in metode

var string = 'John Snow';

function stringToArray(s) {
  var newArray = [];
  var word = '';

  for (var i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      newArray[newArray.length] = word;
      word = '';
    } else if (i === s.length - 1) {
      word += s[i];
      newArray[newArray.length] = word;
    } else {
      word += s[i];
    }
  }
  return newArray;
}

console.log(stringToArray(string));