// 9.	Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
//        var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//        var LOWER = 'abcdefghijklmnopqrstuvwxyz';

// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"
// You should use loops only for the 4 and 9 assignment, all others can be solved using built-in object methods. 


var inputString = 'The Quick Brown Fox12323$#%#';

function swapsTheCaseOfEachCharacter(string) {

  var capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '
  var smallLetters = 'abcdefghijklmnopqrstuvwxyz';

  var swapString = '';

  for (var i = 0; i < string.length; i++) {


    for (var j = 0; j < capitalLetters.length; j++) {
      if (string[i].includes(capitalLetters[j])) {
        swapString += string[i].toLowerCase();
      }
      if (string[i].includes(smallLetters[j])) {
        swapString += string[i].toUpperCase();
      }
    }
  }
  return swapString;
}

console.log(swapsTheCaseOfEachCharacter(inputString));


// nacin 2


var inputString = 'The Quick Brown Fox12323$#%#';

function swapsTheCaseOfEachCharacter2(str) {
  var result = '';

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (char === char.toLowerCase()) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }
  return result;

  // return str.split('').map(e=>{
  //   if(e == e.toLowerCase()) {
  //     return e.toUpperCase()
  //   }
  //   else {
  //     return e.toLowerCase()
  //   }
  // }).join('');
}


console.log(swapsTheCaseOfEachCharacter2(inputString));