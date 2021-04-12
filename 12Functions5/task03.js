/*3.	Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/


function studentsGrade(namesArray, pointsarray) {
  var newArray = [];
  var j = 0;
  var gradeArray = [];

  for (var i = 0; i < pointsArray.length; i++) {
    if (pointsArray[i] <= 50) {
      grade = 'failed to complete the exam.';
    } else if (51 <= pointsArray[i] && pointsArray[i] <= 60) {
      grade = 'earned 6.';
    } else if (61 <= pointsArray[i] && pointsArray[i] <= 70) {
      grade = 'earned 7.';
    } else if (71 <= pointsArray[i] && pointsArray[i] <= 80) {
      grade = 'earned 8.';
    } else if (81 <= pointsArray[i] && pointsArray[i] <= 90) {
      grade = 'earned 9.';
    } else {
      grade = 'earned 10.';
    }
    gradeArray[i] = grade;
  }

  for (var i = 0; i < namesArray.length; i++) {
    newArray[j] = [namesArray[i] + ' acquired ' + pointsArray[i] + ' points and ' + gradeArray[i]];
    j++;
  }
  return newArray;
}


var namesArray = ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var pointsArray = [50, 39, 63, 72, 99, 51, 83, 59];

console.log(studentsGrade(namesArray, pointsArray));