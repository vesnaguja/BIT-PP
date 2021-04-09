// 4.	Write a program that finds the first element larger than minimum and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2

var a = [4, 2, 2, -1, 6];
var minimum = a[0];
var secondMinimum = Infinity;

for (var i = 0; i < a.length; i++) {
  if (a[i] < minimum) {
    minimum = a[i];
  }
}

for (i = 0; i < a.length; i++) {
  if (a[i] !== minimum && a[i] < secondMinimum) {
    secondMinimum = a[i];
  }
}

console.log(secondMinimum);