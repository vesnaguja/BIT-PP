// //6.	Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

const drawHorizontalChart = (...args) => (args.map(arg => '* '.repeat(arg))).join('\n');

console.log(drawHorizontalChart(5, 3, 7, 2));