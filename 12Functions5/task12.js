/*12.	Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9
*/

function greatestCommonDivisior(num1, num2) {
  var divisior = 'Numbers don\'t have common divisior.';

  for (var i = 2; i < 1000; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisior = i;
    }
  }
  return divisior;
}

var num1 = 192;
var num2 = 42;

console.log(greatestCommonDivisior(num1, num2));