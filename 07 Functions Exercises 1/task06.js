// //6.	Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *


function starChart(num) {
  var star = '* ';
  var result = '';
  for (i = 0; i < num; i++) {
    result = result + star;
  }
  return result;
}


function multiChar(array) {
  var result = '';
  for (var i = 0; i < array.length; i++) {
    result = result + starChart(array[i]) + '\n';
  }
  return result;
}


var nums = [5, 3, 7];

console.log(multiChar(nums));