/*10.	Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
 */

var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var unique = [3, 'a'];


function elementInArray(inputArray, inputElement) {
  // proverava da li se element nalazi u nizu
  // code here

  return //true/false;

}


function uniqueArray(inputArray) {
  // vraca novi niz sa unikatnim elementima input niza
  let uniqueArray;
  // code here
  
  // petlja koja ide kroz clanove inputArray , a to je pocetni niz (nije unikatan)
  // za svaki element pocetnog niza, mi treba da proverimo da li se nalazi u unikatnom nizu (*) i ako se ne nalazi, dodacemo ga u unikatan niz
  // ako se nalazi, idemo na sledeci element pocetnog niza

  //(*) provera da li se element nalazi u unikatnom nizu se radi u odvojenoj funkciji elementInArary gde ces da prosledis trenutni unikatni niz i element,
  // koji proveravas da li se nalazi u unikatnom nizu (koji je zapravo element iz pocetnog niza)

  return uniqueArray;
}

unique = uniqueArray(array);

// za svaki element u unikatnom nizu, treba da prebrojimo koliko se puta ponovio u pocetnom nizu - koristi elementOccurencesInArray()




function elementOccurencesInArray(inputArray, inputElement) {
  // vraca broj ponavljanja elementa inputElement u nizu inputArray

  let count = 0;

  // code here

  return count;
}

unique = [3, 'a', 2, 4, 9];

brojPonavljanja = [7, 4, 1, 1, 1]// broj ponavljanja svakog elementa unique niza, petljom ides kroz unique (niz)

// na kojoj poziciji je element sa najvise ponavljanja, za to nam treba da vidimo najveci broj (odnosno indeks na kome je najveci broj) niza brojPonavljanja
// moze da bude funkcija za sebe

let indexNajvecegBroja = najveciBlaBla() // kada otkrijes index najveceg broja, treba ti element iz niza unique na istoj toj poziciji (indeksu)

// krajnji rezultat
unique[indexNajvecegBroja];



//////////////////////////////
var abc = function (x, y) {
  if (x > y) return 1;
  if (x == y) return 0;
  if (x < y) return -1;
}



let niz = [5, 4, 3, 12, 1, 5, 6, 467];

let sortiraniNiz = niz.sort( (x,y) => y-x);

console.log(sortiraniNiz);