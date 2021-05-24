// 11.	
// a.	Write a function that generates a random integer value between 5 and 20.

var start = 5;
var end = 21;

function generateRandomInt5To20(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}

var randomInt = generateRandomInt5To20(start, end);

console.log((randomInt));

// b.	Write a function that generates a random integer value between 50 and 100. 

var start = 50;
var end = 101;

function generateRandomInt50To100(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}

var randomInt = generateRandomInt50To100(start, end);

console.log((randomInt));

// c.	Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.    

var num = 5;

function arrayOfRandomNum(n, generateInt50To100) {
  var array = [];
  array = n * array.push(generateInt50To100()); 
  return array;
}

console.log(arrayOfRandomNum(num, generateRandomInt50To100));