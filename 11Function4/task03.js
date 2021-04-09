/* 3.	Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

function minOfArray(array) {
  var min = array[0]; 
  var minIndex = 0;
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
    result = [min, minIndex];
  }

  return result;
}


var a = [4, 2, 2, -1, 6];

console.log(minOfArray(a));