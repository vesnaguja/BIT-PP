//9.	Write a function to find the median element of array.


function medianElement(array) {
  var result;
  if (array.length % 2 === 0) {
    result = (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
    return result;
  } else {
    result = array[array.length / 2 - 0.5];
    return result;
  }
}


var array = [1, 5, 23, 50, 100];

console.log(medianElement(array));

