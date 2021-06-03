/*12. Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]
Output: 
   78
  111  
    4
 4321
*/


function rightAlignedNumbers(array) {
   var output = '';
   var numOfSpaces = [];

   //f-ja koja nalazi najveci broj
   function lengthOfTheLongestNumber(array) {
      var theBiggestNumber = array[0].length;
      for (var i = 1; i < array.length; i++) {

         if (array[i].length > theBiggestNumber) {
            theBiggestNumber = array[i].length;
         }
      }
      return theBiggestNumber;
   }

   // racunanje broja spejseva
   function spacesCalculator(array, lengthOfTheLongestNumber) {

      for (var i = 0; i < array.length; i++) {
         numOfSpaces[numOfSpaces.length] = lengthOfTheLongestNumber(array) - array[i].length;
      }
      return numOfSpaces;
   }
   // console.log(numOfSpaces);


   //f-ja koja dodaje spejseve

   function addSpaces(numOfSpaces) {
      var spaces = [];
      for (var j = 0; j < numOfSpaces.length; j++) {
         numOfSpaces[j] = ' ';
      }
      return spaces;
   }


   for (var i = 0; i < array.length; i++) {
      output += addSpaces(numOfSpaces) + array[i] + '\n';
   }


   return output;
}

console.log(rightAlignedNumbers([78, 111, 4, 4321]));