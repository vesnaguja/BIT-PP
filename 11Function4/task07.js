/*7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/


function intertwinesTwoArrays(inputArray1, inputArray2) {
  var newArray = [];
  var j = 0;
  for (var i = 0; i < inputArray1.length; i++) {
    newArray[j] = inputArray1[i];
    j++;
    newArray[j] = inputArray2[i];
    j++;
  }
  return newArray;
}


var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];

console.log(intertwinesTwoArrays(array1, array2));