// 7.	Write a program that calculates a number of digits of a given number. 

function numberOfDigits(number) {
  var digits = 1;

  if (number < 0) {
    number *= -1;
  }

  for (i = 10; number / i >= 1; i = i * 10) {
    digits++;
  }
  return digits;
}

console.log(numberOfDigits(-100));