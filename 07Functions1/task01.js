//1.	Write a program that calculates the maximum of two given numbers. 


function biggerNum(num1, num2) {

  if (num1 > num2) {
    return num1;
  }
  if (num2 > num1) {
    return num2;
  }
  return 'Numbers are equal';

}


console.log(biggerNum(-3, -3));