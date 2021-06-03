// 9.	Write a function that for a given departure and arrival time calculates the time the trip takes.
// 	Input: 8:22:13 11:43:22
// 	Output: 3 hours 21 minutes 9 seconds


var departureTime = '08:22:13';
var arrivalTime = '11:43:22';

function tripDurationCalculator(aT, dT) {
  var date = 'May 23, 2021 ';
  var aT = new Date(date + aT);
  var dT = new Date(date + dT);

  var msDiff = aT - dT;
  var hDiff = msDiff / 1000 / 3600;
  var hours = Math.floor(hDiff);
  var minutes = Math.floor((hDiff - hours) * 60);
  var seconds = Math.floor(((hDiff - hours) * 60 - minutes) * 60);

  return [hours, minutes, seconds];
}

time = tripDurationCalculator(arrivalTime, departureTime);

console.log(time[0] + ' hours ' + time[1] + ' minutes ' + time[2] + ' seconds');