/*Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
Sample Input: 60°C
	Output : 60°C is 140 °F*/


  var inputTemperatura = 60;
  var outputTemperatura;
  var fromTo = 'F to C'; // 'C to F';
  
  var output = '';
  
  if (fromTo === 'C to F') {
    outputTemperatura = (9*inputTemperatura/5)+32;
    output = inputTemperatura + "C is " + outputTemperatura + "F";
  }
  else if (fromTo === 'F to C') {
    outputTemperatura = (inputTemperatura-32)*5/9;
    output = inputTemperatura + "F is " + outputTemperatura + "C";
  }
  else {
    output = 'Proveriti unos temperature.'
  }
  
  console.log(output);
  
  //ili
  
  var temperatureC = 60;  
  var temperatureF = (9*temperatureC/5) +32;
  
  console.log(temperatureC + ' is ' + temperatureF);