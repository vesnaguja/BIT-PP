/* 8.	Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"
*/


function wordInString(string, word) {
  var arrayOfStrings = [];
  var x = 0;
  var count = 0;

  for (var i = 0; i <= string.length - word.length; i++) {
    var subString = '';

    for (var j = 0; j < word.length; j++) {
      subString += string[i + j];
      //console.log('i: ' + i + ' string od i: ' + string[i] + ' | j: ' + j + ' string od j: ' + string[i+j] + '        subString: ' + subString);
    }
    arrayOfStrings[x] = subString;
    x++;
  }

  for (x = 0; x < arrayOfStrings.length; x++) {
    if (arrayOfStrings[x] === word) {
      count++;
    }
  }
  return count;
}


var string = 'The quick brown fox';
var word = 'fox';

console.log(wordInString(string, word));


/////////////////////////////////////////////////
//DRUGI NACIN

/* 8.	Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"
*/


var string = 'The quick brown fox';
var word = 'fox';


function substring(inputString, indexFrom, inputLength) {
  //vraca deo inputString-a od indexFrom i ide inputLength karaktera
  //input: abcdef, 1, 3
  //output: bcd

  let result = '';

  for (let i = indexFrom; i < indexFrom + inputLength; i++) {
    result += inputString[i];
  }

  return result;
}

function countOfStringInString(inputString, inputWord) {

  var sveKombinacije = [];
  var k = 0;

  for (let i = 0; i < array.length; i++) {
    sveKombinacije[k] = substring(inputString, i, inputWord.length);
    k++;

  }
}