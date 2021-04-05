// 11.	 Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]


function convert(stringArray) {
  var numArray = [];
  var j = 0;

  for (var i = 0; i < stringArray.length; i++) {
    var converted = parseFloat(stringArray[i]);

    if (isFinite(converted)) {
      numArray[j] = converted;
      j++;
    }
  }
  return numArray;
}

var stringArray = ["1", "21", undefined, "42", "1e+3", Infinity];

console.log(convert(stringArray));