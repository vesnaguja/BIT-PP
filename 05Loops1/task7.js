/*7.	Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. 
	
David	80
Marko	77
Dany	88
John	95
Thomas	68

The grades are computed as follows :

< 60%	F
< 70%	D
< 80%	C
< 90%	B
< 100%	A
*/

var marks = [80, 77, 88, 95, 68];

var sum = 0;
var average = 0;
var grade = '';



for (var i = 0; i < marks.length; i++) {
  sum = sum + marks[i];
}

average = sum / marks.length;

console.log(average);

if (average < 60) {
  grade = 'F';
} else if (average < 70) {
  grade = 'D';
} else if (average < 80) {
  grade = 'C';
} else if (average < 90) {
  grade = 'B';
} else if (average <= 100) {
  grade = 'A'
}


console.log(grade);
