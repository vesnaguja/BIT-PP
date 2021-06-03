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


function multiChart(array) {
  var result = '';
  for (var i = 0; i < array.length; i++) {
    result = result + starChart(array[i]) + '\n';
  }
  return result;
}


var nums = [5, 3, 7];

console.log(multiChart(nums));



//kraci nacin

function multiChart(array) {
  var result = '';
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i]; j++) {
      result = result + '* ';
    }
    result = result + '\n';
  }
  return result;
}

var array = [5, 3, 7];
console.log(multiChart(array));


// f-ja koja prima neograniceni broj argumenata

function chart() {
  var result = '';
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i]; j++) {
      result += '*';
    }
    result += '\n';
  }
  return result;
}


console.log(chart(5, 3, 7, 8));