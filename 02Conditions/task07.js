/*Task 7. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double difference between that number and 13.
	Sample Input: 11					Sample Input: 32
	Output : 2						Output : 38
*/

var a = 32;

if (a <= 13) {
  console.log(13 - a);
} else if (a > 13) {
  console.log((a - 13) * 2);
};


// with function
const differenceTo13 = num => (num <= 13) ? (13 - num) : ((num - 13) * 2);

console.log(differenceTo13(15));