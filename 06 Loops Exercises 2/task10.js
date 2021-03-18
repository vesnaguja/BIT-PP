// 10.	Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

var e = 78;
var p = 3;

var a = [2, -2, 33, 12, 5, 8];
var b = [];
var j = 0;

if (p > a.length) {
  b = 'The given position p is greater than the array length.';
} else if (p <= a.length) {

  for (var i = 0; i < p; i++) {
    b[j] = a[i];
    j++;
  }

  b[j] = e;
  j++;

  for (i = p; i < a.length; i++) {
    b[j] = a[i];
    j++;
  }
}

console.log(b);