/*Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10  					Sample input: 7
Output: 10 / 2 = 5					Output: X  
*/

var a = 10
var result = a/2;
if (typeof a == 'number' && a%2 == 0) {
  console.log(result);
}
else {
  console.log('X');
}
