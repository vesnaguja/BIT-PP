'use strict';

(function () {
  function Person(name, surname) {
    if (!name || !surname) {
      throw new Error('Fields name and surname are required')
    }
    this.name = name;
    this.surname = surname;
    this.getData = function () {
      return this.name + ' ' + this.surname;
    }
  }

  function Seat(number, category) {
    category = category || 'e';
    number = number || Math.round(Math.random() * 90 + 10);
    if (!['e', 'b'].includes(category)) {
      throw new Error('Invalid category input');
    }

    this.number = number;
    this.category = category.toUpperCase();
    this.getData = function () {
      return this.number + ', ' + this.category;
    }
  }

  function Passenger(person, seat) {
    if (!person || !(person instanceof Person)) {
      throw new Error('Invalid person input');
    }
    if (!seat || !(seat instanceof Seat)) {
      throw new Error('Invalid seat input');
    }
    this.person = person;
    this.seat = seat;
    this.getData = function () {
      return this.seat.getData() + ', ' + this.person.getData();
    }
  }

  function Flight(relation, date) {
    if (!relation || !date) {
      throw new Error('Fields relation and date are required')
    }
    this.relation = relation;
    this.date = new Date(date);
    this.listOfPassengers = [];

    this.addPassenger = function (passenger) {
      if (!passenger || !(passenger instanceof Passenger)) {
        throw new Error('Invalid passenger input')
      }

      if (this.listOfPassengers.length > 100) {
        throw new Error('Flight can only take 100 passengers.')
      }

      var sameSeat = this.listOfPassengers.find(function (e) {
        return e.seat.number == passenger.seat.number && e.seat.category == passenger.seat.category;
      });

      if (sameSeat !== undefined) {
        throw new Error('Passengers can not have the same seat number.')
      }

      var samePerson = this.listOfPassengers.find(function (el) {
        return el.person.name === passenger.person.name && el.person.surname === passenger.person.surname;
      });

      if (samePerson !== undefined) {
        var samePersonIndeks = this.listOfPassengers.indexOf(samePerson);
        this.listOfPassengers.splice(samePersonIndeks, 1)
      }
      this.listOfPassengers.push(passenger);
    }

    this.getData = function () {

      var vowels = 'aeiouAEIOU';
      var cities = this.relation.split(' - ');
      var relationShort = cities.map(function (c) {
        var cityLetters = c.split('');
        var firstConsonant = cityLetters.find(function (v) {
          return !vowels.includes(v)
        })

        var lastConsonant = cityLetters.reverse().find(function (v) {
          return !vowels.includes(v)
        })

        return (firstConsonant + lastConsonant).toUpperCase();

      }).join(' - ')


      var result = '';
      var day = this.date.getDate();
      var month = this.date.getMonth() + 1;
      var year = this.date.getFullYear();
      result += '\t' + day + '.' + month + '.' + year + ', ' + relationShort + '\n';
      
      this.listOfPassengers.forEach(function (passenger) {
        result += '\t\t\t' + passenger.getData() + '\n'
      })
      return result;
    }
    this.numberOfPassengers = function () {
      return this.listOfPassengers.length;
    }

  }

  function Airport() {
    this.name = 'Nikola Tesla';
    this.listOfFlights = [];

    this.addFlight = function (flight) {
      if (!flight || !(flight instanceof Flight)) {
        throw new Error('Invalid flight input')
      }
      this.listOfFlights.push(flight);
    }

    this.getTotalPassengerNumber = function () {
      var count = 0;
      this.listOfFlights.forEach(function (flight) {
        count += flight.numberOfPassengers()
      })
      return count;
    }

    this.getData = function () {
      var result = 'Airport: ' + this.name + ', total passengers: ' + this.getTotalPassengerNumber() + '\n';
      this.listOfFlights.forEach(function (flight) {
        result += flight.getData();
      })
      return result;
    }
  }


  function createFlight(relation, date) {
    return new Flight(relation, date)
  }


  function createPassenger(name, surname, seatNumber, seatCatgory) {
    var person = new Person(name, surname);
    var seat = new Seat(seatNumber, seatCatgory);
    return new Passenger(person, seat);
  }

  //testing
  try {
    var nikolaTesla = new Airport();

    var flight1 = createFlight('Belgrade - New York', 'Oct 25 2017')
    var flight2 = createFlight('Barcelona - Belgrade', 'Nov 11 2017')

    var passenger1 = createPassenger('John', 'Snow', 1, 'b')
    var passenger2 = createPassenger('Cersei', 'Lannister', 101, 'b')
    var passenger3 = createPassenger('Daenerys', 'Targaryen', 14)
    var passenger4 = createPassenger('Tyrion', 'Lannister')

    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight2.addPassenger(passenger3);
    flight2.addPassenger(passenger4);

    nikolaTesla.addFlight(flight1);
    nikolaTesla.addFlight(flight2);

    console.log(nikolaTesla.getData());

  } catch (error) {

    console.log('Error message: ' + error.message);

  }

})();