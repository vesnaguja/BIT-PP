/*4.	Write a function that filters all even elements of the array.
	Input: [6, 11, 9, 0, 3]
	Output: [6, 0]
*/

var array = [6, 11, 9, 0, 3];

var filtersEven = array => array.filter(num => num % 2 === 0)

console.log(filtersEven(array));