// 3.	Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

var a = [4, 2, 2, -1, 6];

var minimum = a[0];
var minimumIndex = 0;

for (var i = 1; i < a.length; i++) {
  if (a[i] < minimum) {
    minimum = a[i];
    minimumIndex = i;
  }
}

console.log(minimum + ', ' + minimumIndex);


