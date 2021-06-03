// 2.	Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]


function joinAllElements(array) {
  var string = '';
  for (var i = 0; i < array.length; i++) {

    if (array[i] !== null && isFinite(array[i])) {
      string = string + array[i];
    }
  }
  return string;
}

var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

console.log(joinAllElements(array));