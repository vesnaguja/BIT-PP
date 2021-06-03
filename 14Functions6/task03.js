/*3.	Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
 */

function rotatesByKelements(array, k) {  
  var newArray = [];

  for (var i = k; i < array.length; i++) {
    newArray[newArray.length] = array[i];
  }

  for (var i = 0; i < k; i++) {
    newArray[newArray.length] = array[i];

  }
  return newArray;
}

var array = [1, 2, 3, 4, 5, 6];
var k = 2; 

console.log(rotatesByKelements(array, k));