//6.	Write a program that outputs the sum of squares of the first 20 numbers. 

var squares = 0;
var sum = 0;


for (var i = 1; i <= 20; i++) {

  squares = i * i;
  sum = sum + squares; //sum = sum + i*i;
}


console.log(sum);