/*6.	Write a function that filters all integer numbers from the given array. 
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
	Output: [7, 8]
*/

const array = [1.6, 11.34, 9.23, 7, 3.11, 8];

const filtersInteger = array => array.filter(n => n % 1 === 0);

console.log(filtersInteger(array));