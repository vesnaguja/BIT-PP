//1.	Write a program that calculates the maximum of two given numbers. 



function biggerNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}

console.log(biggerNum(2,-3));