/* Task 1. Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
Sample numbers: 3, -7, 2 
Output: The sign is - */

var a = 3;
var b = -7;
var c = 2;
var proizvod = a * b * c;
var message = '';

if (proizvod <0) {
  message = '-';
}
else {
  message = '+';
}
console.log('The sign is ' + message);

//ili
var znak = '+';
if(proizvod < 0) {
  znak = '-';
}
console.log(znak);


// kraće
(a*b*c <0) ? console.log('-') : console.log('+');

// još kraće
console.log((a*b*c <0) ? '-' : '+');