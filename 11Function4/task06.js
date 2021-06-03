/*6.	Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.
*/


function isSymmetric(inputArray) {
  var symmetri = true;
  var result = '';
  for (var start = 0, end = inputArray.length-1; start < end; start++, end--) {
    if (inputArray[start] !== inputArray[end]) {
      symmetri = false;
    }
  }
  
  if (symmetri === true) {
    result = 'The array is symmetric.';
  } else {
    result = 'The array isn’t symmetric.';
  }

  return result;
}


var array = [2, 4, -2, 7, -2, 4, 2];
console.log(isSymmetric(array));