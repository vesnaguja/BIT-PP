//2.	Write a program that checks if a given number is odd.

const isOdd = num => num % 2 !== 0 ? true : (num === 0 ? 'Number is 0' : false);

console.log(isOdd(0));