'use strict';

(function () {
  //console.log('Hi');

  function createFlight(relation, date) {
    return new Flight(relation, date);
  }
  var flight1 = createFlight('Belgarde - New York', 'Oct 25 2021');
  var flight2 = createFlight('Barcelona - Belgrade', 'Nov 11 2021');


  function createPassenger(name, surname, number, category) {
    return new Passenger(new Person(name, surname), new Seat(number, category));
  }

  var passenger1 = createPassenger('John', 'Snow', 1, 'b');
  var passenger2 = createPassenger('Cersei', 'Lannister', 2, 'e');
  var passenger3 = createPassenger('Daenerys', 'Targaryen', 14);
  var passenger4 = createPassenger('Tyrion', 'Lannister');
  //var passenger5 = createPassenger('John', 'Snow', 3, 'b');



  flight1.addPassenger(passenger1);
  flight1.addPassenger(passenger2);

  flight2.addPassenger(passenger3);
  flight2.addPassenger(passenger4);

  //flight1.addPassenger(passenger5);

  var airport1 = new Airport();
  //console.log(airport1);

  // console.log(flight1.getData());
  //  console.log(flight2.getData());

  airport1.addFlight(flight1);
  airport1.addFlight(flight2);

  airport1.listOfFlights.forEach(function (e) {
    console.log(e.getData());
  })

})();


function Person(name, surname) {
  this.name = name;
  this.surname = surname;
  this.getData = function () {
    return this.name + ' ' + this.surname;
  }
}

function Seat(number, category = 'e') {
  this.number = number || Math.floor(Math.random() * 90 + 10)

  if (category.toLowerCase() === 'b' || category.toLowerCase() === 'e') {
    this.category = category.toUpperCase();
  } else {
    this.category = null;
  }

  this.getData = function () {
    return this.number + ', ' + this.category;
  }
}

function Passenger(person, seat) {
  if (person instanceof Person) {
    this.person = person;
  } else {
    this.person = null;
  }
  if (seat instanceof Seat) {
    this.seat = seat;
  } else {
    this.seat = null;
  }
  this.getData = function () {
    return this.seat.getData() + ', ' + this.person.getData();
  }
}

function Flight(relation, date) {
  this.relation = relation;
  this.date = new Date(date);
  this.listOfPassengers = [];

  this.addPassenger = function (p) {
    if (!(p instanceof Passenger)) {
      return 'Only passengers can be added to flight.'
    }

    if (this.listOfPassengers.length > 100) {
      return 'Flight can only take 100 passengers.'
    }

    var sameSeat = this.listOfPassengers.find(function (e) {
      return e.seat.number == p.seat.number && e.seat.category == p.seat.category;
    });

    if (sameSeat !== undefined) {
      return 'Passengers can not have the same seat number.'
    }

    var samePerson = this.listOfPassengers.find(function (el) {
      return el.person.name === p.person.name && el.person.surname === p.person.surname;
    });

    if (samePerson !== undefined) {
      var samePersonIndeks = this.listOfPassengers.indexOf(samePerson);
      this.listOfPassengers.splice(samePersonIndeks, 1)
    }

    this.listOfPassengers.push(p);
  }

  this.getData = function () {

    var samoglasnici = 'aeiouAEIOU';

    var gradovi = this.relation.split(' - ');

    var relationShort = gradovi.map(function (g) {
      var slovaGrada = g.split('');

      var prviSuglasnik = slovaGrada.find(function (s) {
        return !samoglasnici.includes(s)
      })

      var zadnjiSuglasnik = slovaGrada.reverse().find(function (s) {
        return !samoglasnici.includes(s)
      })

      return (prviSuglasnik + zadnjiSuglasnik).toUpperCase();

    }).join(' - ')

    var allPassengerData = '';
    this.listOfPassengers.forEach(function (p) {
      allPassengerData += '\t\t\t' + p.getData() + '\n'
    });
    return this.date.toLocaleDateString('en-GB') + ', ' + relationShort + '\n' + allPassengerData;
  }

}

function Airport() {
  this.name = 'Nikola Tesla';
  this.listOfFlights = [];

  this.addFlight = function (f) {
    if (f instanceof Flight) {
      this.listOfFlights.push(f);
    }
  }
}