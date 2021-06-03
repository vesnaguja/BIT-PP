//8.	Write a function to find the maximum and minimum elements. Function returns an array.



function maxAndMin(array) {
  var max = array[0];
  var min = array[0];

  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }

    if (array[i] < min) {
      min = array[i];
    }
  }
  return [max, min];
}

var array = [100, 3, 500, -20, 10, 65, 600];

console.log(maxAndMin(array));