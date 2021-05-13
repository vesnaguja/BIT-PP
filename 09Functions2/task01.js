// 1.	Write a function to check whether the `input` is a string or not.

// "My random string" -> true
// 12 -> false

function isString(a) {
  if (typeof a === 'string') {
    return true;

  } else {
    return false;
  }
}

var a = "My random string";
console.log(isString(a));


// kraca verzija

function isString(input) {
  if(typeof input === 'string') {
    return true;
  }
  return false;  
}

var result = isString('My random string');
console.log(result);

// jos kraca verzija

function isString(input) {
  return typeof input === 'string';
}

var result = isString("My random string");

console.log(result);