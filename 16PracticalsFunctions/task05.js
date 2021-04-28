/*5.	Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]
*/

function deleteEverySecond(array) {
  newArray = [];
  var j = 0;
  for (var i = 0; i < array.length; i = i + 2) {
    newArray[j] = array[i];
    j++;
  }
  return newArray;
}


console.log(deleteEverySecond([3, 5, 1, 8, 90, -4, 23, 1, 67]));