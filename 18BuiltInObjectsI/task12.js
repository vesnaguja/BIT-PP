// 12. Write a function that shuffles the elements of a given array. 
// 		Input: [3, 6, 11, 2, 9, 1]
// 		Output: [6, 2, 9, 1, 3, 11]  (it can be any random permutation of the given array)

var inputArray = [3, 6, 11, 2, 9, 1];

function shufflesElementsOfArray(array) {
  return shuffledArray = array.sort(function () {
    return 0.5 - Math.random()
  });
}

console.log(shufflesElementsOfArray(inputArray));