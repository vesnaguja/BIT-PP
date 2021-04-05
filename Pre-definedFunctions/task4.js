// 4.	Write a program that calculates a number of integer values in the array.

// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3



function numOfInteger(array) {
  var num = 0;
  for (var i = 0; i < array.length; i++) {
    if (Number.isInteger(a[i]) === true) {
      num += 1;
    }
  }
  return num;
}

var a = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

console.log(numOfInteger(a));

/////////////


function numOfInteger(array) {
  var num = 0;
  for (var i = 0; i < array.length; i++) {
    var y = parseFloat(array[i], 10); //23.1
    var x = parseInt(array[i], 10); //23
    if (!isNaN(x) && x == y) {
      num++;
    }
  }
  return num;
}

var a = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

console.log(numOfInteger(a));


var b = 23.1;

var c = parseInt(b);

console.log(c);