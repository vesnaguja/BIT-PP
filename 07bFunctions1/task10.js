//10.	Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.

const numOfApperancesOfALetterInAString = (string, letter) => (string.toLowerCase().split(letter.toLowerCase())).length - 1;

console.log(numOfApperancesOfALetterInAString('blablabla', 'A'));