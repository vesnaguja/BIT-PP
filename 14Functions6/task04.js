//4.	Write a function that takes a number and returns array of its digits.


function numberToArray(number) {
  var string = '' + number;
  var array = [];

  for (var i = 0; i < string.length; i++) {
    array[i] = parseInt(string[i]);
  }
  return array;
}

var number = 12345;

console.log(numberToArray(number));