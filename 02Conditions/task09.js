/*Task 9. Write a JavaScript program to check two given numbers and print “true” if one of the number is 50 or if their sum is 50.
	Sample Input: 5,54			Sample Input: 6,50			Sample Input: 40,10
	Output : -				Output : true				Output : true
*/

var a = 5;
var b = 50;

if (a === 50 || b === 50 || (a + b) === 50) {
  console.log('true');
} else {
  console.log('-');
};

// with function

const is50 = (num1, num2) => (num1 === 50 || num2 === 50 || (num1 + num2) === 50) ? console.log('true') : console.log('-');

is50(0, 45);