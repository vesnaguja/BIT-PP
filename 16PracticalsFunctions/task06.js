/*6.	Write a function that replaces the elements of the given array between two positions with their doubled values. 
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]
*/

function doubledValuesBetweenPositions(array, position1, position2) {
  for (let i = 0; i < array.length; i++) {
    if (i >= position1 && i <= position2) {
      array[i] = array[i] * 2;
    }
  }
}

var niz = [3, 5, 1, 8, 90, -4, 23, 1, 67];
doubledValuesBetweenPositions(niz, 2, 6)


console.log(niz);