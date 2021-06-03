// 3.	
// a.	Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true


function isArrayOfOddNumOfElements(array) {
  if (array.length % 2 !== 0) return true;
  return false;
}

var inputArray = [1, 2, 9, 2, 1];
var output = isArrayOfOddNumOfElements(inputArray);

console.log(output);


// b.	Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

function numOfElLessThanMidEl(array) {
  var indexOfMiddleEl = 0;
  var newArray = [];

  if (!isArrayOfOddNumOfElements(array)) {
    return 'The input array has an even number of elements.'
  }

  indexOfMiddleEl = Math.floor(array.length / 2);

  newArray = array.filter(function (element) {
    return element < array[indexOfMiddleEl];
  });
  
  return newArray.length;
}

var inputArray = [-1, 8.1, 3, 6, 2.3, 44, 2.11];


console.log(numOfElLessThanMidEl(inputArray));