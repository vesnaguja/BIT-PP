/*Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
	Sample Input: 12,5					Sample Input: 8,8
	Output : 17						Output : 48
*/
var a = 8;
var b = 8;

if (a !== b) {
  console.log(a + b);
} else {
  console.log((a + b) * 3)
};

// with function
const sumOfInt = (num1, num2) => (num1 !== num2) ? console.log(num1 + num2) : console.log((num1 + num2) * 3);

sumOfInt(12, 8);