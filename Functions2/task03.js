// 3.	Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"


function stringConcat(string, numOfConcatination) {
  var sum = '';

  if (!!parseInt(numOfConcatination) === false) {
    return string;
  }

  for (var i = 0; i < numOfConcatination; i++) {
    sum = sum + string;
  }

  return sum;

}

var a = 'Ha';
var num = 3;

console.log(stringConcat(a, num));