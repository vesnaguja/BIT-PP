//7.	Write a function to find the maximum element in array of numbers. Filter out all non-number elements.


function numberFilter(array) {
  var numberArray = [];
  var j = 0;

  for (var i = 0; i < array.length; i++) {
    var converted = parseInt(array[i]);
    if (isFinite(converted)) {
      numberArray[j] = converted;
      j++;
    }
  }
  return numberArray;
}

function maxFinder(array) {
  var numberArray = numberFilter(array);
  for (var j = 0; j < numberArray.length; j++) {
    var max = numberArray[0];
    if (numberArray[j] > max) {
      max = numberArray[j];
    }
  }
  return max;
}

var array = [5, 'b', 32, 56, 'Something', NaN, Infinity];


console.log(maxFinder(array));