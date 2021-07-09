// 1. CLASSES

// ES5
// function Vacation(destination, length) {
//   this.destination = destination;
//   this.length = length;
// }

// Vacation.prototype.print = function () {
//   console.log(this.destination + " | " + this.length)  
// }
// var maui = new Vacation("Maui", 7);
// maui.print(); // Maui | 7


//ES6
class Vacation {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }
  print() {
    console.log(`${this.destination} | ${this.length}`);
  }
}

var maui = new Vacation("Maui", 7);
maui.print(); // Maui | 7


const trip = new Vacation('Cyprus', 10)
trip.print(); // Cyprus | 10


// kada druga klasa extenduje prvu 
class Expedition extends Vacation {
  constructor(destination, length, gear) {
    super(destination, length)
    this.gear = gear;
  }
  print() {
    super.print()
    console.log(`Bring your ${this.gear.join(' and your ')}`);
  }
}

const trip2 = new Expedition('Vesna', 5, ['sneakers', 'water'])
trip2.print()


// 2. DESTRUCTURING ASSIGNMENT OBJECTS AND ARRAYS

const bitSubjects = {
  subject1: 'PP',
  subject2: 'Web'
}

const {
  subject1
} = bitSubjects;
console.log(subject1);

let {
  subject2
} = bitSubjects;
subject2 = 'WebApps';
console.log(subject2);
console.log(bitSubjects.subject2);

//

function showName(personObject) {
  console.log(`${personObject.name}`)
}

const regularPerson = {
  name: "John",
  surname: "Snow"
}

showName(regularPerson)
// John

function showNameDest({
  name
}) {
  console.log(`${name}`)
}

showNameDest(regularPerson)
// John


// Values can also be destructured from arrays

const [firstCompany] = ["Apple", "Microsoft", "Samsung"];
console.log(firstCompany); // Apple

const [, , lastCompany] = ["Apple", "Microsoft", "Samsung"];
console.log(lastCompany); // Samsung


// 3. ARROW FUNCTIONS

const niz = [1, 2, 3, 4];
const kopijaNiza = niz.map(x => x * 2);
console.log(kopijaNiza);
console.log(niz);


const proizvod = (a, b) => a * b;
console.log(proizvod(5, 6));

// hocemo da izracunamo prosek (saberemo sve elemente niza i podelimo sa duzinom niza)
const average = numbers => {
  const sum = numbers.reduce((a, b) => a + b); // a je akumulator, b je trenutna vrednost
  return sum / numbers.length;
};
console.log(average(niz)); // 2.5



// 4. THE REST/SPREAD OPERATOR

// Rest operator

const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"]
const [first, ...rest] = lakes

console.log(rest.join(", ")) // "Marlette, Fallen Leaf, Cascade"

// Spread operator

const peaks = ["Tallac", "Ralston", "Rose"]
const canyons = ["Ward", "Blackwood"]
const tahoe = [...peaks, ...canyons]
console.log(tahoe.join(', ')) 
// Tallac, Ralston, Rose, Ward, Blackwood
