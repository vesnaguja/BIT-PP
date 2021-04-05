// 7.	Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]


function stringIntoArray(string) {
  var array = [];
  var j = 0;
  for (var i = 0; i < string.length; i++) {
    array[j] = string[i]
    j++;
  }
  return array;
}

var string = "Random";
console.log(stringIntoArray(string));



////////////////////////////

function stringIntoArray(string) {
  var array = [];
  var j = 0;
  
  for (var i = 0; i < string.length; i++) {
    
    if (string[i] === ' ') {
      array[j] = null;
    } else {
      array[j] = string[i];
    }
    
    j++;
  }
  return array;
}

var string = "My random string";
console.log(stringIntoArray(string));