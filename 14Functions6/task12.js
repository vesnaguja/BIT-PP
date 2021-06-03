//12.	Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.


function averageOfNElements() {
  var sum = 0;
  var numbers = 0;

  for (var i = 0; i < arguments.length; i++) {
    if(!isNaN(parseInt(arguments[i]))) {
      sum = sum + arguments[i];
      numbers++;
    }
  }

  return sum / numbers;
}



console.log(averageOfNElements(1, 2, 3, 4, 6, 'A'));