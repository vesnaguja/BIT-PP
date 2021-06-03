/*8.	Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/


function concatenatesTwoArrays(inputArray1, inputArray2) {
  var newArray = [];
  var j = 0;

  for (var i = 0; i < inputArray1.length; i++) {
    newArray[newArray.length] = inputArray1[i];    
  }

  for (var i = 0; i < inputArray2.length; i++) {
    newArray[newArray.length] = inputArray2[i];     
  }
  return newArray;
}


var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];

console.log(concatenatesTwoArrays(array1, array2));