//10.	Write a function to find the element that occurs most frequently.


function mostFreq(array) {
  var mostFrequent;
  var counter = 0;
  var maxCounter = 0;
  for (var i = 0; i < array.length; i++) {
    maxCounter = 0;
    for (var j = 0; j < array.length; j++) {
      if (array[j] === array[i]) {
        maxCounter++;
      }
      if (maxCounter > counter) {
        counter = maxCounter;
        mostFrequent = array[j];
      }
    }
  }
  return mostFrequent;
}

var array = [1, 2, 3, 2, 4, 5, 2, 2];


console.log(mostFreq(array));





