/*5.	Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/


function sumOfPositive(inputArray) {
  var sum =0;
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > 0) {
      sum += inputArray[i];
    }      
  }
  return sum;
}


var array = [3, 11, -5, -3, 2];

console.log(sumOfPositive(array));