// 8.	Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

const numberOfAppearances = (array, num) => array.filter(number => number === num).length;

console.log(numberOfAppearances([2, 4, 7, 8, 7, 7, 1], 7));