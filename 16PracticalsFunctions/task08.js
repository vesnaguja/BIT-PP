/*8.	Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true
*/

function isContained(array1, array2) {
  var nadjeniIndeksi = [];

  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {

      if (nadjeniIndeksi.includes(j)) {
        continue;
      }

      if (array1[i] === array2[j]) {
        nadjeniIndeksi[nadjeniIndeksi.length] = j; // isto sto i: nadjeniIndeksi.push(j);
        break;
      }
    }
  }
  return array1.length === nadjeniIndeksi.length;
}


console.log(isContained([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));