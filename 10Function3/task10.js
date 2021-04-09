/*10.	Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
 */

function elementInArray(inputArray, inputElement) {
  for (var i = 0; i < inputArray.length; i++) {
    if (inputElement === inputArray[i]) {
      return true;
    }
  }
  return false;
}


function uniqueArray(inputArray) {
  var uniqueArray = [];
  for (var i = 0; i < inputArray.length; i++) {
    if (elementInArray(uniqueArray, inputArray[i]) == false) {
      uniqueArray[uniqueArray.length] = inputArray[i];
      //console.log('i je ' + i + ' inputArray[i] ' + inputArray[i] + ' uniqueArray ' + uniqueArray);
    }
  }
  return uniqueArray;
}




function elementOccurencesInArray(inputArray, inputElement) {
  // vraca broj ponavljanja elementa inputElement u nizu inputArray
  var count = 0;  
  for (var j = 0; j < inputElement.length; j++) {
    if (inputElement[j] === inputArray[i]) {
      count++;
    }
  }
  return count;
}

console.log(elementOccurencesInArray(array, unique));


/* code below, functions above */
var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var unique = uniqueArray(array);



//console.log(unique);




/*


brojPonavljanja = elementOccurencesInArray(array, uniqueArray);
console.log(brojPonavljanja);



unique = [3, 'a', 2, 4, 9];

brojPonavljanja = [4, 5, 2, 1, 1] // broj ponavljanja svakog elementa unique niza, petljom ides kroz unique (niz)

// na kojoj poziciji je element sa najvise ponavljanja, za to nam treba da vidimo najveci broj (odnosno indeks na kome je najveci broj) niza brojPonavljanja
// moze da bude funkcija za sebe

let indexNajvecegBroja = najveciBlaBla() // kada otkrijes index najveceg broja, treba ti element iz niza unique na istoj toj poziciji (indeksu)

// krajnji rezultat
unique[indexNajvecegBroja];

*/