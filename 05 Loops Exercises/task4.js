//4.	Write a program which prints the elements of the following array as a single string.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var sum = 0;

//console.log(x.length);

for (var i = 0; i < x.length; i++) {
  sum = sum + ' ' + x[i]

}

console.log(sum);

