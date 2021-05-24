//1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]


var duplicateArrayElements = function (array) { //function expression je kad varijabli dodelim f-ju
  var newArray = [];

  array.forEach(function (el, i) {
    console.log('From forEach: index ' + i + ', value ' + el);
    newArray.push(el, el)
  })
  return newArray;
}

var sample = [2, 4, 7, 11, -2, 1];
var result = duplicateArrayElements(sample)
console.log(result);
console.log(sample);