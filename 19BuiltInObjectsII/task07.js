// 7.	Write a function to capitalize the first letter of a string and returns modified string.

// "js string exercises" -> "Js string exercises"

var inputString = 'js string exercises';

function capitalizeTheFirstLetter(string) {
  var firstLetter = string[0].toUpperCase();
  var restOfString = string.substr(1);
  return firstLetter + restOfString;
}

console.log(capitalizeTheFirstLetter(inputString));

// krace

var inputString = 'js string exercises';

function capitalizeTheFirstLetter(string) {  
  return string[0].toUpperCase() + string.substr(1);
}

console.log(capitalizeTheFirstLetter(inputString));