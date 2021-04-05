//11.	Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 



function concOfString(string, numberOfConcatenation) {
  var i = 0;
  var result = '';

  while (i < numberOfConcatenation) {
    result = result + string; // result += string;
  }
  return result;
}



var string = 'abc';
var numberOfConcatenation = 4;

console.log(concOfString(string, numberOfConcatenation));

