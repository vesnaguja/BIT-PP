/*5.	(skip :))Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
*/

var arr =  [ 13, 11, 15, 5, 6, 1, 8, 12 ];

function selectionSortDescendingOrder(array) {
  var temp;
   for (var i = 0; i < array.length; i++) {
     var max = array[i];
     var indexOfMax = i;

     for (var j = i; j < array.length; j++) {
      if (array[j] > max) {
        max = array[j];
        indexOfMax = j;
      }
       
     }
     temp = array[i];
     array[i] = max;
     array[indexOfMax] = temp;
   }
  return array;
}

console.log(selectionSortDescendingOrder(arr));
