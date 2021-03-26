// 5.	Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
// * * * * *
// *       *
// *       *
// *       *
// * * * * *

var size = 5;
var star = '* ';
var result = '';

for (i = 0; i < size; i++) {
  for (j = 0; j < size; j++) {
    result = result + star;
  }
  result = result + '\n';
}
console.log(result);

