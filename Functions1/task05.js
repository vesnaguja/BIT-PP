// 5.	Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
// * * * * *
// *       *
// *       *
// *       *
// * * * * *

// var size = 5;
// var star = '* ';
// var result = '';

// for (i = 0; i < size; i++) {
//   for (j = 0; j < size; j++) {
//     result = result + star;
//   }
//   result = result + '\n';
// }
// console.log(result);


////////////////////////////////////////////

function drawSquare(size) {

  var result = '';
  for (i = 0; i < size; i++) {
    result = result + ' ';
    if (i === 0 || i === size - 1) {
      for (j = 0; j < size; j++) {
        result = result + '* ';
      }
    } else {
      result = result + '* ';

      for (x = 1; x < size - 1; x++) {
        result = result + '  ';
      }
      result = result + '* ';
    }
    result = result + '\n';
  }
  return result;
}


var size = 5;
console.log(drawSquare(size));


/////////////////////////////////////////////

function drawSquare(size) {
  var result = '';
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (i === 0 || i === size - 1) {
        result += '* ';
      } else if (j === 0 || j === size - 1) {
        result += '* ';
      } else {
        result += '  ';
      }
    }
    result += '\n';
  }

  return result;
}
var size = 5;
var result = drawSquare(size);

console.log(result);