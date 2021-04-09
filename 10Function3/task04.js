// 4.	Write a function that reverses a number. The result must be a number.

// 12345 -> 54321 // Output must be a number



/* Note - number to string :
var num = 3;
var string = '' + num;*/


function reverseNumber(num) {
  var string = '' + num;
  var reverseString = '';
  var newNumber = 0;

  for (var i = (string.length - 1); i >= 0; i--) {
    reverseString += string[i];
  }
  return newNumber = parseInt(reverseString);
}

var num = 12345;
console.log(reverseNumber(num));