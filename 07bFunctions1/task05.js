// 5.	Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
// * * * * *
// *       *
// *       *
// *       *
// * * * * *

const drawSquare = (num) => {
  const star = '* ';
  const space = '  ';
  const firstAndLastRow = star.repeat(num) + '\n';
  const middleRow = star + space.repeat(num - 2) + star + '\n';
  const square = firstAndLastRow + middleRow.repeat(num - 2) + firstAndLastRow;
  return square;
}

console.log(drawSquare(8));