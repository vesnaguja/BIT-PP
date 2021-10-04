// 7.	Write a program that calculates a number of digits of a given number. 

const calcNumOfDigitsOfANumber = num => Math.abs(num).toString().length;

console.log(calcNumOfDigitsOfANumber(-1000));