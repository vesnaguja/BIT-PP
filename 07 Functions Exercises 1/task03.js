//3.	Write a program that checks if a given number is a three digit long number.

function threeDigitNumber(number) {
  if (number >= 100 && number < 1000) {
    return true;
  }
  return false;
}

console.log(threeDigitNumber(999));