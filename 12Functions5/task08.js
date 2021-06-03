/*8.	Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
*/



function reversedString(string) {
  var newString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

var string = 'Belgrade Institute of Technology';

console.log(reversedString(string));