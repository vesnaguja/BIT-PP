/*5.	Write a function that returns a function that calculates a decimal value of the given octal number. 
Input: 034
Output: 28
*/

var octalNumber = 034;

var outterFunction = function () {
  return function (o) {
    return parseInt(o);
  }
};

var innerFunction = outterFunction();

console.log(innerFunction(octalNumber));
