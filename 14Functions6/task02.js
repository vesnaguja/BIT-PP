/*2.	Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
 */

function twoArrays(array1, array2) {
  var newArray = [];
  var j = 0;

  for (var i = 0; i < array1.length; i++) {
    newArray[j] = array1[i], array2[i];
    j++;

    newArray[j] = array2[i];
    j++;
  }
  return newArray;
}


var array1 = ['a', 'b', 'c'];
var array2 = [1, 2, 3];

console.log(twoArrays(array1, array2));