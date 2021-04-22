//13.	Write a function to find all the numbers greater than the average.


function greaterThanTheAverage(array) {
  var average;
  var sum = 0;
  var result = [];
  var j = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }

  average = sum / array.length;

  for (var i = 0; i < array.length; i++) {
    if (array[i] > average) {
      result[j] = array[i];
      j++;
    }
  }
  return result;
}

var array = [1, 5, 29, 66, 78, 3, 50];

console.log(greaterThanTheAverage(array));