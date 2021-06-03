/* 2.	Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

function positiveMultiBy2(array) {  
  for (var i = 0; i < array.length; i++) {      
    if (array[i] > 0) {
      array[i] = array[i] * 2;     
    }
  }
  return array;
}


var a = [-3, 11, 5, 3.4, -8];

console.log(positiveMultiBy2(a));