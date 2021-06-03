// 1.	Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
// 	12345 -> 54321

var num = 12345;

function reversesNumber(n) { 
  return n.toString().split("").reverse().join(""); 
}

console.log(reversesNumber(num));