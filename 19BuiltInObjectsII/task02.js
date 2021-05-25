// 2.	Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

// “Webmaster” -> “abeemrstw”

var string = "Webmaster";

function sortStringAlphabetically(s) {
  return s.toLowerCase().split("").sort().join("");
}

console.log(sortStringAlphabetically(string));