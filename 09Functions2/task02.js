// 2.	Write a function to check whether a string is blank or not.

// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

function isBlankString(input) {
  if (input === ' ') {
    return true;

  } else {
    return false;
  }
}

var result = isBlankString(' ');
console.log(result);


// krace

function isBlankString(input) {
  if (input === ' ') {
    return true;
  }
  return false;
}

var result = isBlankString(' ');
console.log(result);
