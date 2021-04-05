// 12.	 Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.

var gender = 'm'; // or 'm'

var birth = 1989;

function yearsUntilRetirement(birth, gender) {
  var years = 2021 - birth;
  var retirement = 0;
  if (gender === 'w') {
    if (years > 60) {
      retirement = 'The woman is already retired.'
    } else {
      retirement = 'This woman has ' + (60 - years) + ' until retirement.';
    }
    
  } else if (gender === 'm') {
    if (years > 65) {
      retirement = 'The man is already retired.'
    } else {
      retirement = 'This man has ' + (65 - years) + ' until retirement.';
    }
  }
  return retirement;
}

console.log(yearsUntilRetirement(birth, gender));