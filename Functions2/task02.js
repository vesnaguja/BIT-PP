// 2.	Write a function to check whether a string is blank or not.

// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

function isBlankString(a) {
  if (a === ' ') {
    return true;

  } else {
    return false;
  }
}

var a = ' ';


console.log(isBlankString(a));