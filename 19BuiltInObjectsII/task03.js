// 3.	Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"

var string = 'Republic Of Serbia';

function alpabetizeWordsOfString(s) { 
  var words = s.split(' ')
  var sortedWords = words.map(function(e) {return e.split('').sort().join('')})
  return sortedWords.join(' ');
}
  
console.log(alpabetizeWordsOfString(string));


// krace

var string = 'Republic Of Serbia';

function alpabetizeWordsOfString(s) {   
  return s.split(' ').map(function(e) {return e.split('').sort().join('')}).join(' ');
}
  
console.log(alpabetizeWordsOfString(string));
