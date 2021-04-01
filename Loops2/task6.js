// 6.	Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// 	Output: The array isn’t symmetric.


var a = [2, 4, -2, 7, -2, 4, 2];
//a = [3, 4, 12, 8];
var result = 'The array is symmetric.'

for (i = 0; i < a.length / 2; i++) {
  if (a[i] !== a[a.length - 1 - i]) {
    result = 'The array is not symmetric.'
  }
}
console.log(result);
           



var a = [2, 4, -2, 7, -2, 4, 2];

var result = 'The array is symmetric.'
///////drugi nacin//////////////////////////////////////////////////////////////////////////////////////////


var a = [2, 4, -2, 7, -2, 4, 2];
var result = true;

for (var start = 0, end = a.length - 1; start < end; start++, end--) {
  if (a[start] !== a[end]) {
    result = false;
  }
}

console.log(result);

result ? console.log('The array is symmetric.') : console.log('The array is not symmetric.');;