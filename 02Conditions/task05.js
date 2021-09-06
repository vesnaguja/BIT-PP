/*Task 5. Write a program that compares two numbers and displays the larger. Display the result in the console.*/

var a = 1;
var b = 1;
var poredjenje;

if (a > b) {
  poredjenje = a;
} else if (b > a) {
  poredjenje = b;
} else {
  poredjenje = 'Brojevi su jednaki.'
}
console.log(poredjenje);

// with function 
const largerOfTwoNumbers = (num1, num2) => {
  (num1 === num2) ? console.log('Numbers are equal.') : ((num1 > num2) ? console.log(num1): console.log(num2));
}

largerOfTwoNumbers(1, 2);