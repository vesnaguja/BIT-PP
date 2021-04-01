//1.	Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.


for (var x = 0; x <= 15; x++) {
  if (x === 0) {
    console.log('The number ' + x + ' is zero')
  } else if (x % 2 === 0 && x !== 0) {
    console.log('The number ' + x + ' is even');
  } else {
    console.log('The number ' + x + ' is odd');
  }
}