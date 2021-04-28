/*4.	(skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
*/


var arr = [13, 11, 15, 5, 6, 1, 8, 12];

function selectionSortMultipliedBy2(array) {
  var temp;

  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] *2;
  }

  for (var i = 0; i < array.length; i++) {
    var min = array[i];
    var indexOfMin = i;

    for (var j = i; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        indexOfMin = j;
      }
    }
    temp = array[i];
    array[i] = min;
    array[indexOfMin] = temp;
  }
  return array;
}


console.log(selectionSort(arr));