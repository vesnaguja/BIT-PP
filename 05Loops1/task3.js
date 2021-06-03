//3.	Write a program to compute the sum and product of an array of integers.

var array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var sum = 0;
var product = 1;


for (var i = 0; i < array.length; i++) {
  sum = sum + array[i];
  product = product * array[i];
}

console.log(sum);
console.log(product);