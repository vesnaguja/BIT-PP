//9.	Write a program that calculates the sum of odd elements of a given array. 

const sumOfOddElements = (array) => {
  let sum = 0;
  array.forEach(num => num % 2 !== 0 && (sum += num))
  return sum;
}

console.log(sumOfOddElements([1, 2, 3]));