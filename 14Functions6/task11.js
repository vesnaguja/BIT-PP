/*11.	Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.*/



function firstMiddleLast(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array.length % 2 !== 0) {
      result = [array[0], array[array.length / 2 - 0.5], array[array.length - 1]];
    } else if (array.length % 2 === 0) {
      result = [array[0], array[array.length - 1]];
    } else {
      result = array;
    }
  }
  return result;
}

var array = [1, 2, 3, 4, 5];

console.log(firstMiddleLast(array));