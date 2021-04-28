/*7.	Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] 
*/

var array = [2, 8, 11, 4, 9, 3];

var isOdd = function (n) {
  if (n % 2 != 0) {
    return true;
  }
  return false;
}

var arrayFilter = function (inputArray, conditionFunction) {
  var newArray = [];
  for (var i = 0; i < inputArray.length; i++) {
    if (conditionFunction(inputArray[i])) {
      newArray[newArray.length] = inputArray[i]
    }
  }
  return newArray;
};


var noviNizBezParnihBrojeva = arrayFilter(array, isOdd);

/*var noviNizBezParnihBrojeva = arrayFilter(array, function (n) {
  if (n % 2 != 0) {
    return true;
  }
  return false;
});*/

console.log(noviNizBezParnihBrojeva);