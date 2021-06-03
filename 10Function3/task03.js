// 3.	Write a program to filter out falsy values from the array.

// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]


var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function falsyOut(array) {
  var newArray = [];
  var j = 0;
  for (var i = 0; i < array.length; i++) {
    if (!!array[i] !== false) {
      newArray[j] = array[i];
      j++;
    }
  }
  return newArray;
}


console.log(falsyOut(array));