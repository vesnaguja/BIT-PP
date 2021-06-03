//3.	Write a program that checks if a given number is a three digit long number.

function threeDigitNumber(number) {
  var abs = number;
  if (abs < 0) {
    abs *= -1;
  }
  if (abs >= 100 && abs < 1000) {
    return true;
  }
  return false;
}

console.log(threeDigitNumber(-999));