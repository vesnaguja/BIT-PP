//2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

var removeDuplicates = function (array) {

  var newArray = [];
  array.forEach(function (elem) {
    if (!newArray.includes(elem)) { //moze i sa indexOf
      newArray.push(elem)
    }
  });

  // for (let i = 0; i < array.length; i++) {
  //   if (!newArray.includes(array[i])) {
  //     newArray.push(array[i])
  //   }
  // }

  return newArray.sort(function (a, b) {
    return a - b;
  })
}

var givenArray = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var outputArray = removeDuplicates(givenArray);

console.log(outputArray);


//razbijanje forEach

var sample = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

sample.forEach(function (e, i, a) {
  console.log(e, i, a);
})

function ourForEach(callBack, array) {  
  for (var i = 0; i < array.length; i++) {
    var curent = array[i];
    callBack(current, i, array);
  }

}

ourForEach(function (e, i, a) {
  console.log(e, i, a)
}, sample)