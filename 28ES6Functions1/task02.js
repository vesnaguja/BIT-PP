//2.	Write a program that checks if a given number is odd.

function isOdd(number) {
  var result = '';
  if (number === 0) {
    result = 'The number is zero.'
  } else if (number % 2 === 0) {
    result = 'The number is even.'
  } else {
    result = 'The number is odd.'
  }
  return result;
}

console.log(isOdd(-2));

// kraca verzija
function isOdd(number) {
  return number % 2 !== 0;
}

console.log(isOdd(4));


// ES6
const isOdd = (num) => (num % 2 === 0) ? `Number ${num} is even` : `Number ${num} is odd`;
console.log(isOdd(3));