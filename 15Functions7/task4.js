/*4.	It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:
●	Store a celsius temperature into a variable.
●	Convert it to fahrenheit and output "NN°C is NN°F".
*/

function celsiusToFahrenheit(temperatureInCelsius) {
  var temperatureInFahrenheit = (temperatureInCelsius * 9 / 5) + 32;

  return temperatureInCelsius + '°C is ' + temperatureInFahrenheit + '°F'
}

console.log(celsiusToFahrenheit(25));


/*Create a function called fahrenheitToCelsius:
●	Now store a fahrenheit temperature into a variable.
●	Convert it to celsius and output "NN°F is NN°C."
*/

function fahrenheitToCelsius(temperatureInFahrenheit) {
  var temperatureInCelsius = (temperatureInFahrenheit-32) * 5/9;

  return temperatureInFahrenheit + '°F is ' + temperatureInCelsius + '°C';
}

console.log(fahrenheitToCelsius(77));


//krace

var fToC = function (f) { return (f-32) * 5/9; } 

var far = 77;
console.log(far + '°F is ' + fToC(far) + '°C');