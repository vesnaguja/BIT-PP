//6.	Write a function to input temperature in Centigrade and convert to Fahrenheit.



function CentigradeToFahrenheit(temperaureInCentigrade) {

  var temperatureInFahrenheit = (temperaureInCentigrade * 9 / 5) + 32;
  return temperatureInFahrenheit;
}

var temperaureInCentigrade = 18;

console.log(CentigradeToFahrenheit(temperaureInCentigrade));