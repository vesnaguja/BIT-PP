/* 9.	Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
 */


function combinationsOfTwo(num) {
  var array = [];
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      if (i !== j)
        array[array.length] = [i, j];
    }
  }
  return array;
}

var n = 7;

console.log(combinationsOfTwo(n));