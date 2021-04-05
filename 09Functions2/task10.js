//10.	 Write a function to get the first n characters and add “...” at the end of newly created string.



function cutString(string, n) {

  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === n) {
      newString = newString + '...';
      break;
    }
    newString += string[i];
  }
  return newString;
}

var string = "My random string";
var n = 30;

console.log(cutString(string, n));