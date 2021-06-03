// 11.	
// a.	Write a function that generates a random integer value between 5 and 20.

var start = 5;
var end = 20;

function generateRandomInt5To20(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var randomInt = generateRandomInt5To20(start, end);

console.log((randomInt));

// b.	Write a function that generates a random integer value between 50 and 100. 

var start = 50;
var end = 100;

function generateRandomInt50To100(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var randomInt = generateRandomInt50To100(start, end);

console.log((randomInt));

// c.	Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.    

// var num = 10;

// function arrayOfRandomNum(n, generateRandomInt50To100) {   
//   return Array.from({length: n}, generateRandomInt50To100());
// }

// console.log(arrayOfRandomNum(num, generateRandomInt50To100));

// uraditi sa callback f-jom

var num = 5;

function arrayOfRandomNum(n, func) {
  return Array.from({
    length: n
  }, function() {
    return func(50, 100);
  });
}

console.log(arrayOfRandomNum(num, generateRandomInt50To100));