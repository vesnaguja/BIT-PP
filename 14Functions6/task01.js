//1.	Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 

function countVowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  var j = 0;
  var count = 0;

  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (string[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
}

var string = 'Write A function to count';

console.log(countVowels(string));