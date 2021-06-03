/*7.	Write a function that checks if a given object has a given property with the given value. 
Input: {x: 20, y: 30}, “x”, 20 
Output: true

Input: {x: 20, y: 30}, “z”, 20 
Output: false 

Input: {x: 20, y: 30}, “x”, 10 
Output: false
*/


var obj = {
  x: 20,
  y: 30
};

var property = 'x';
var value = 20;


function isPropertyAndValueInObject(object, p, v) {
  return object[p] === v;
}

console.log(isPropertyAndValueInObject(obj, property, value));




