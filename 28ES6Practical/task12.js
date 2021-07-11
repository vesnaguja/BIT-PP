/*12.	Write a function that calculates the maximum of the given array. 
Input: [2, 7, 3, 8, 5.4] 
Output: 8
*/

const array = [2, 7, 3, 8, 5.4];
const max = array => Math.max(...array);
console.log(max(array));