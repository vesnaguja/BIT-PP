// 5.	Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]  

/*Function for last element:*/


function lastElement(array) {
  var last = 0;
  for (var i = 0; i < array.length; i++) {
    last = array[array.length - 1];
  }
  return last;
}

var array = [7, 9, 0, -2];

console.log(lastElement(array));



/*Function for last n elements:*/

function lastElements(array, n = 1) {
  var lastNel = [];
  var j = 0;

  if (!isFinite(parseInt(n))) {
    return "Please insert a number for parameter n.";
  }

  for (var i = array.length - n; i < array.length; i++) {
    lastNel[j] = array[i];
    j++;
  }
  if (n > array.length) {
    lastNel = array;
  }
  
  return lastNel;
}

var array = [7, 9, 0, -2];
var n = 2;

console.log(lastElements(array, n));



/*kako da prihvatis samo brojeve*/
let a;

console.log((a * 1) == a);