// 2.	Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: “015false-2247”


var a = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function joinAllNumbers(array) {

  var sum = '';

  for (var i = 0; i < array.length; i++) {
    if (array[i] !== null && isFinite(array[i])) {
      sum = sum + array[i];
    }
  }
  return sum;
}

console.log(joinAllNumbers(a));