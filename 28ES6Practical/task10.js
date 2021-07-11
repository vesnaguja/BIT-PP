/*10.	Write a function that checks if the given array is an array of positive integer values. 
	Input: [3, 11, 9, 5, 6]
	Output: yes
  
  Input: [3, -12, 4, 11]
	Output: no
*/

const array = [3, 11, 9, 5, 6];
const isAllPositive = array => array.some(n => n < 0);

console.log(!isAllPositive(array) ? 'yes' : 'no');