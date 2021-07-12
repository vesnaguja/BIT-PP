//10.	Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.


function numOfApperances(string, letter) {
  var numOfApperances = 0;

  // string = string.toLowerCase(); //porediti 'a' === 'A'
  // letter = letter.toLowerCase();

  for (var i = 0; i < string.length; i++) {
    if (letter === string[i] || letterBig === string[i]) {
      numOfApperances += 1;
    }
  }
  return numOfApperances;
}

var string = 'A lorem ipsum dolor sit amet, consectetur adipiscing elit.'
var letter = 'a';
var letterBig = 'A'
console.log(numOfApperances(string, letter));


// ES6

const numOfApperances = (str, lett) => {
  let strLower = str.toLowerCase()
  let lettLower = lett.toLowerCase()
  let numOfLettInStr = [];
  strLower.split('').forEach((el) => {
    if (el === lettLower) {
    numOfLettInStr.push(el)
    }      
  });
  return numOfLettInStr.length;
}

const string = 'A lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const letter = 'a';
console.log(numOfApperances(string, letter));

//console.log(string.toLowerCase().split(letter.toLowerCase()).length - 1)



// with match()

const string = 'A lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const regex = /[a]/g;

const found = string.toLowerCase().match(regex);

console.log(found.length);