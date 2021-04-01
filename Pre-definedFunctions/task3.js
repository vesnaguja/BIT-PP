// 3.	Write a program to filter out falsy values from the array.

// Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]

var a = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function falsyFilter(array) {
  var b = [];
  var j = 0;
  for (var i = 0; i < array.length; i++) {
    if (!!array[i] !== false) {
      b[j] = array[i];
      j++;
    }
  }
  return b;
}

console.log(falsyFilter(a));


