/*6.	Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000
*/

function calculation() {
  var sumEven = 0;
  var sumOdd = 0;
  var result = 0;

  for (var i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
      sumEven = sumEven + i;
    }
  } 

  for (var i = 1; i < 500; i++) {
    if (i % 2 !== 0) {
      sumOdd = sumOdd + i;
    }
  }
  return result = (sumEven - sumOdd) * 12.5;
}

console.log(calculation());