// 6.	Write a function to create a specified number of elements with pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null] 


function createArray(n, element = null) {

  var array = [];

  for (var i = 0; i < n; i++) {
    array[i] = element;
  }
  return array;
}

var n = 6;
var element = 0;

console.log(createArray(n, element));