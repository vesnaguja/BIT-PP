/*1.	Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/

function switchMinAndMax(inArray) {
  var min = inArray[0];
  var indexMin = 0;
  var max = inArray[0];
  var indexMax = 0;

  for (var i = 0; i < inArray.length; i++) {
    if (inArray[i] < min) {
      min = inArray[i];
      indexMin = i;
    }
    if (inArray[i] > max) {
      max = inArray[i];
      indexMax = i;
    }
  }  
  inArray[indexMax] = min;
  inArray[indexMin] = max;

  return inArray;
}

var array = [3, 500, 12, 149, 53, 414, 1, 19];

console.log(switchMinAndMax(array));
