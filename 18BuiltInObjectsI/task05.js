// 5.	
// a.	Write a function that finds all the elements in a given array less than a given element. 
// 	Input: [2, 3, 8, -2, 11, 4], 6 
// 	Output: [2, 3, -2, 4]

var inputArray = [2, 3, 8, -2, 11, 4];
var givenElement = 6;

var elementsLessThanAGivenElement = function (element) { // krace: var newArray = inputArray.filter(e=>e < givenElement)
  return element < givenElement;
}

var newArray = inputArray.filter(elementsLessThanAGivenElement);

console.log(newArray);


// b.	Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
// 	Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
// 	Output: [’Programming’, ‘product’]

var inputArray = ['JavaScript', 'Programming', 'fun', 'product'];
var subString = 'pro';

function findElementsWithProSubstring(array, term) {
  var newArray = array.filter(function (el) {
    return el.slice(0, term.length).toLowerCase() === term.toLowerCase();
  });

  return newArray;
}
console.log(findElementsWithProSubstring(inputArray, subString));



// c.	Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. 


function filter(array, callback) {
  return array.filter(callback);
}

console.log(filter([1, 2, 8, 6, 7, 25], function (el) {
  return el < 6;
}));