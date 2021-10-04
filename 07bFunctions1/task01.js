//1.	Write a program that calculates the maximum of two given numbers. 

const biggerNumber = (num1, num2) => num1 > num2 ? num1 : (num1 === num2 ? 'Numbers are equal' : num2);

console.log(biggerNumber(8, 6));