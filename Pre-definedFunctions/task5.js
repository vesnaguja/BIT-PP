// 5.	Write a program that calculates a number of float values in the array.

// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2

function numOfFloat(array) {
  var float = 0;
  for (var i = 0; i < array.length; i++) {
    if (a[i] % 1 !== 0 && isNaN(a[i]) === false) {
      float++;
    }
  }
  return float;
}

var a = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

console.log(numOfFloat(a));


/////////////////////////////

function numOfFloat(array) {
  var float = 0;
  for (var i = 0; i < array.length; i++) {
    var y = parseFloat(array[i], 10); //23.1
    var x = parseInt (array[i], 10) //23
    if (!isNaN(x) && x != y) {
      float++;
    }
  }
  return float;
}

var a = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

console.log(numOfFloat(a));


