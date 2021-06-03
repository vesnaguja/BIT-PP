/*4.	Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/


function smallestNumber(inputArray) {
  var min = inputArray[0];
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] < min) {
      min = inputArray[i]
    }
  }
  return min;
}


function secondSmallest(inputArray) { 
  var nextToMin = Infinity;
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] < nextToMin && inputArray[i] !== smallestNumber(inputArray)) {
      nextToMin = inputArray[i];
    }
  }
  return nextToMin;
}


var array = [4, 2, 2, -1, 6];

console.log(secondSmallest(array));