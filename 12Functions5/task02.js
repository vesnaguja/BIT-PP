/*2.	Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/


function newAritmeticArray(array) {
  var newArray = [];
  var j = 0;
  for (var i = 0; i < array.length; i++) {
    newArray[j] = array[i] / 2 + 5;

    if (newArray[j] === 0) {
      newArray[j] = 20;
    }
    j++;
  }
  return newArray;
}



var array = [3, 500, -10, 149, 53, 414, 1, 19];

console.log(newAritmeticArray(array));