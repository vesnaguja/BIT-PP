// 8.	Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];

var c = [];
var j = 0;

for (var i = 0; i < a.length; i++) {
  c[j] = a[i];
  j = j + 1;
}


for (i = 0; i < b.length; i++) {
  c[j] = b[i];
  j = j + 1;
}

console.log(c);