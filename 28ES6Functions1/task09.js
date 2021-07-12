//9.	Write a program that calculates the sum of odd elements of a given array. 

function sumOfOdd(array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      sum = sum + array[i];
    }
  }
  return sum;
}

var array = [1, 2, 3];
console.log(sumOfOdd(array));

// ES6 

const sumOfOdd = array => {
  return array.reduce((sum, element, indeks) => {
    return (indeks % 2 !== 0) ? sum + element : sum;
  }, 0);
};

console.log(sumOfOdd([1, 2, 3]));