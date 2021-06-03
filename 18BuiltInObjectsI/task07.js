// 7.	
// a.	Write a function that checks if a given string is written in all capitals.

var inputString = '5AAA3';

var isInAllCapitals = function (string) {
  return string.toUpperCase() === string;
}

console.log(isInAllCapitals(inputString))

// b.	Write a function that checks if a given string contains any digits. // String - split('') some()

function isContainsDigit(string) {

  var array = string.split('');
  console.log(array);

  function isDigit(e, array) {
    return typeof (e) == 'number';
  }
  return array.some(isDigit);
}

console.log(isContainsDigit(inputString));

// 
var inputString = '5AAA';
var regex = /\d/;
var isContainsDigit = regex.test(inputString);
console.log(isContainsDigit);


function hasDigits(string) {
  /*for (var i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i]))) {
      return true;
    }
  }
  return false;*/

  hasNum = string.split('').some(function(e) {
    return !isNaN(parseInt(e))
  })

  return hasNum;
}


console.log(hasDigits('AAA5'));

// c.	Write a function that checks if a given string is a valid hexadecimal color.

function isHexadecimalColor(string) {
  if (string.charAt(0) === '#' && string.length === 7) {
    return 'It is valid color';
  } else {
    return 'It is not valid color';
  }
}

console.log(isHexadecimalColor('#ffffff'));

// d.	Write a function that checks if a given number belongs to the interval from 1900 to 2018. 

function isNumInInterval(num, start, end) {
  if (num >= start && num <= end) {
    return true;
  } else {
    return false
  };
}

console.log(isNumInInterval(1100, 1900, 2018));

// e.	Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

function Validator (str, pw, color, year, start, end) {
  this.stringValidator = isInAllCapitals(str);
  this.passwordValidator = hasDigits(pw);
  this.colorValidator = isHexadecimalColor(color);
  this.yearValidator = isNumInInterval(year, start, end);
}

var logIn1 = new Validator('Vesna', '1234', '#ffffff', 2021, 1900, 2018);

console.log(logIn1);

console.log(logIn1.hasDigits());

