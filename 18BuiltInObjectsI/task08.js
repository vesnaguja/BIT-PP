// 8.	Write a function that calculates a number of days to your birthday.
// Input: 25 February 
// Output: 5 days

var birthday = new Date('05/14/2021');


function numOfDaysToBirthday(bDay) {
  var today = new Date();
  var diff = bDay.getTime() - today.getTime();
  var msInDays = 1000 * 3600 * 24;
  return diff / msInDays;
}
 

var daysToBDay = Math.round(numOfDaysToBirthday(birthday)); // da li je ovde trebalo Math.round?
console.log((daysToBDay));


