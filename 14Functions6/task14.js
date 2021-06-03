/*14.	The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
●	Starvation: less than 15
●	Anorexic: less than 17.5
●	Underweight: less than 18.5
●	Ideal: greater than or equal to 18.5 but less than 25
●	Overweight: greater than or equal to 25 but less than 30
●	Obese: greater than or equal to 30 but less than 40
●	Morbidly obese: greater than or equal to 40
*/


function computeBMI(weight, height) {
  var BMI = weight / (height * height);
  var result = '';

  if (BMI < 15) {
    result = 'Starvation: less than 15';
  } else if (BMI < 17.5) {
    result = 'Anorexic: less than 17.5';
  } else if (BMI < 18.5) {
    result = 'Underweight: less than 18.5';
  } else if (BMI >= 18.5 && BMI < 25) {
    result = 'Ideal: greater than or equal to 18.5 but less than 25';
  } else if (BMI >= 25 && BMI < 30) {
    result = 'Overweight: greater than or equal to 25 but less than 30';
  } else if (BMI >= 30 && BMI < 40) {
    result = 'Obese: greater than or equal to 30 but less than 40';
  } else if (BMI >= 40) {
    result = 'Morbidly obese: greater than or equal to 40';
  }
  return result;
}


var weight = 52;
var height = 1.59;

console.log(computeBMI(weight, height));