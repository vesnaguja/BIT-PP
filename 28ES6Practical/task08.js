/*8.	Write a function that returns indexes of the elements greater than 10. 
	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
	Output: 1, 2, 5
*/

const array = [1.6, 11.34, 29.23, 7, 3.11, 18];

const indexesOfGreaterThan10 = array => {
	let arrayOfInd = [];
	array.forEach((el, i) => {
		if (el > 10) {
			arrayOfInd.push(i);
		}	
	})
	return arrayOfInd;
}

console.log(indexesOfGreaterThan10(array));