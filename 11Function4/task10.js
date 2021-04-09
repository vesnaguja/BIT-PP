/*
10.	Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/

function insertInArray(inputArray, position, element) {
  var newArray = [];
  for (var i = 0; i < position; i++) {
    newArray[newArray.length] = inputArray[i];
  }

  newArray[newArray.length] = element;

  for (var i = position; i < inputArray.length; i++) {
    newArray[newArray.length] = inputArray[i];
  }

  return newArray;
}

var array = [2, -2, 33, 12, 5, 8];
var e = 78;
var p = 3;

console.log(insertInArray(array, p, e));