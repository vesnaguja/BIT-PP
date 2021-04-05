// // 1.	Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]



function ToArrayOfNumbers(array) {
  var b = [];
  var j = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] !== undefined && array[i] !== Infinity) {
      b[j] = parseFloat(array[i]);
      j++;
    }
  }
  return b;
}

var a = ["1", "21", undefined, "42", "1e+3", Infinity];

console.log(ToArrayOfNumbers(a));


/////////////////////

function convert(array) {
  var b = [];
  var j =0;
  for (var i = 0; i < a.length; i++) {
    var converted = parseFloat(array[i]);
    if (isFinite(converted)) {
      b[j] = converted;
      j++;
    }
  }
  return b;
}


var a = ["1", "21", undefined, "42", "1e+3", Infinity];


console.log(convert(a));
