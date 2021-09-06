/*Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400, and print range in which number belongs.
Sample Input: 13			Sample Input: 34			Sample Input: 256
	Output : -				Output : 20 ⇔ 100			Output : 100 ⇔ 400
*/

var a = 256;

if (a > 20 && a < 100) {
  console.log('20 - 100')
} else if (a > 100 && a < 400) {
  console.log('100 - 400');
} else {
  console.log('-');
}


// with function
const rangeOfGivenNumber = num => {  
  (num > 20 && num < 100) && console.log('20 - 100');
  (num > 100 && num < 400) && console.log('100 - 400');  
  (num <= 20 || num >= 400) && console.log('-');
};

rangeOfGivenNumber(25);