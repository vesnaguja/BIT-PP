// 4.	Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }


var inputArray = [1, 4, -2, 11, 8, 1, -2, 3];

function smallestValueObject(array) {
  // Math.min prima elemente niza, ne moze da primi niz, pa se ispred niza doda ... spred operator
  var min = Math.min(...array);

  // lastIndexOf da nadjem poslednji index na kojem je minimum
  var minIndex = array.lastIndexOf(min);

  // kad su ime propertija i ime vrednosti isti, ne moras 2 puta da ih pises -> ovde bi bilo: return {min, minIndex}
  return {min: min, minIndex: minIndex};
}

console.log(smallestValueObject(inputArray));