/*8.	Write a function that returns indexes of the elements greater than 10. 
	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
	Output: 1, 2, 5
*/

const array = [1.6, 11.34, 29.23, 7, 3.11, 18];

const indexesOfGreaterThan10 = [];

array.forEach((el, i) => {
	if (el>10) {
		indexesOfGreaterThan10.push(i);
	}
})

console.log(indexesOfGreaterThan10);