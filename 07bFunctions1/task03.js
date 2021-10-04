//3.	Write a program that checks if a given number is a three digit long number.

const isThreeDigitLongNumber = num => {
  num = Math.abs(num);
  return (num > 99 && num < 1000) ? true: false;
}

console.log(isThreeDigitLongNumber(-256));


