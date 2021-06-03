/*2.	Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!”
*/

function JSreplaceWithStars(string) {
  var word = 'JS';
  var arrayOfStrings = [];
  var x = 0;
  var result = '';

  for (var i = 0; i <= string.length - word.length; i++) {
    var subString = '';
    for (var j = 0; j < word.length; j++) {
      subString += string[i + j];
    }
    arrayOfStrings[x] = subString;
    x++;
  }

  for (x = 0; x < arrayOfStrings.length; x++) {
    if (arrayOfStrings[x] === 'JS') {
      arrayOfStrings[x] = '**';
    }
  }
  
  //arrayOfStrings sada vratiti u string

  return result;
}

console.log(JSreplaceWithStars('Programming in JS is super interesting!'));