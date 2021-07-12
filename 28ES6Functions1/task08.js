// 8.	Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3


function numOfApperances(array, number) {
  var numOfApperances = 0;
  for (var i = 0; i < array.length; i++) {
    if (number === array[i]) {
      numOfApperances += 1;
    }
  }
  return numOfApperances;
}


var array = [2, 4, 7, 8, 7, 7, 1]
var number = 7;

console.log(numOfApperances(array, number));


// ES6 

const calcNumOfDigits = (array, number) => {
 const newArray = array.filter(num => num === number); 
 return newArray.length;
}

console.log(calcNumOfDigits([2, 4, 7, 8, 7, 7, 1], 7));