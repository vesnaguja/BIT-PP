/*9.	Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/

function deleteElementFromArray(inputArray, element) {
  var newArray = [];
  for (var i = 0; i < inputArray.length; i++) {
    if (element !== inputArray[i]) {
      newArray[newArray.length] = inputArray[i];
    }
  }
  return newArray;
}

var array = [4, 6, 2, 8, 2, 2];
var e = 2;

console.log(deleteElementFromArray(array, e));