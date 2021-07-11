/*11.	Write a function that calculates the product of the elements of the array. 
Input: [2, 8, 3]
Output: 48
*/

const array = [2, 8, 3];
const product = array => array.reduce((a, b) => a * b)

console.log(product(array));