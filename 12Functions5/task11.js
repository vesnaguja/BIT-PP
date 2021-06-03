/*11.	Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true
*/


function isPalindrome(string) {
  var newString = '';
  var result = true;

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      newString += string[i];
    }
  }
  
  for (var start = 0, end = newString.length - 1; start < end; start++, end--) {
    if (newString[start] !== newString[end]) {
      result = false;
    }
  }

  return result;
}

var string = 'a nut for a jar of tuna';

console.log(isPalindrome(string));