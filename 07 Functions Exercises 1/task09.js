//9.	Write a program that calculates the sum of odd elements of a given array. 


function sumOfOdd(array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum = sum + array[i];
    }
  }
  return sum;
}



var array = [1, 2, 3];

console.log(sumOfOdd(array));