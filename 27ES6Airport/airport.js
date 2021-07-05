'use strict';

(function () {
  function Person(name, surname) {
    if (!name || !surname) {
      throw new Error('Person: Fields name and surname are required')
    }
    this.name = name;
    this.surname = surname;
    this.getData = function () {
      return `${this.name} ${this.surname}`;
    }
  }

  function Seat(number, category) {
    category = category || 'e';
    number = number || Math.round(Math.random() * 90 + 10);
    if (!['e', 'b'].includes(category)) {
      throw new Error('Seeat: Invalid category input');
    }

    this.number = number;
    this.category = category.toUpperCase();
    this.getData = function () {
      return `${this.number}, ${this.category}`;
    }
  }

  function Passenger(person, seat) {
    if (!person || !(person instanceof Person)) {
      throw new Error('Passenger: Invalid person input');
    }
    if (!seat || !(seat instanceof Seat)) {
      throw new Error('Passenger: Invalid seat input');
    }
    this.person = person;
    this.seat = seat;

    if (this.seat.category === 'B') {
      var categoryLong = 'business';
    }
    if (this.seat.category === 'E') {
      var categoryLong = 'economy';
    }

    this.getData = function () {
      return `\t${this.seat.number}, ${categoryLong}, ${this.person.getData()}`;
    }
  }

  function Flight(relation, date) {
    if (!relation || !date) {
      throw new Error('Flight: Fields relation and date are required')
    }
    this.relation = relation;
    this.date = new Date(date);
    this.listOfPassengers = [];

    this.addPassenger = function (passenger) {
      if (!passenger || !(passenger instanceof Passenger)) {
        throw new Error('Flight: Invalid passenger input')
      }

      if (this.listOfPassengers.length + 1 > 100) { // +1 je za trenutnog putnika
        throw new Error('Flight: Flight can only take 100 passengers.')
      }

      let sameSeat = this.listOfPassengers.find(function (e) {
        return e.seat.number == passenger.seat.number && e.seat.category == passenger.seat.category;
      });

      if (sameSeat !== undefined) {
        throw new Error('Flight: Passengers can not have the same seat number.')
      }

      let samePerson = this.listOfPassengers.find(function (el, index) {
        // el.person.getData() === passenger.person.getData();
        return el.person.name === passenger.person.name && el.person.surname === passenger.person.surname;
      });

      if (samePerson !== undefined) {
        let samePersonIndeks = this.listOfPassengers.indexOf(samePerson);
        this.listOfPassengers.splice(samePersonIndeks, 1)
      }
      this.listOfPassengers.push(passenger);
    }

    this.getData = function () {

      let vowels = 'aeiouAEIOU';
      let cities = this.relation.split(' - ');
      let relationShort = cities.map(function (c) {
        let cityLetters = c.split('');
        let firstConsonant = cityLetters.find(function (v) {
          return !vowels.includes(v)
        })

        let lastConsonant = cityLetters.reverse().find(function (v) {
          return !vowels.includes(v)
        })

        return (firstConsonant + lastConsonant).toUpperCase();

      }).join(' - ')


      let result = '';
      let day = this.date.getDate();
      let month = this.date.getMonth() + 1;
      let year = this.date.getFullYear();
      result += `${day}.${month}.${year}, ${relationShort}\n`;


      this.listOfPassengers.forEach(function (passenger) {
        result += `      ${passenger.getData()}\n`
      })
      return result;
    }
    this.numberOfPassengers = function () {
      return this.listOfPassengers.length;
    }

    this.getBusinessP = function () {
      let sum = 0;
      this.listOfPassengers.forEach(function (passenger) {
        if (passenger.seat.category == 'B') {
          sum += 1;
        }
      })
      return sum;

      //return this.listOfPassengers.filter(function(passenger) { return passenger.seat.category === 'B'}).length
    }

  }

  function Airport() {
    this.name = 'Nikola Tesla';
    this.listOfFlights = [];

    this.addFlight = function (flight) {
      if (!flight || !(flight instanceof Flight)) {
        throw new Error('Airport: Invalid flight input')
      }
      this.listOfFlights.push(flight);
    }

    this.getTotalPassengerNumber = function () {
      let count = 0;
      this.listOfFlights.forEach(function (flight) {
        count += flight.numberOfPassengers()
      })
      return count;
    }

    this.getAllBusinessP = function () {
      let sum = 0;
      this.listOfFlights.forEach(function (flight) {
        sum += flight.getBusinessP();
      })
      return sum;
    }


    this.getData = function () {
      let result =
`Airport: ${this.name}, total passengers: ${this.getTotalPassengerNumber()}
\tTotal airport number of passengers in business category: ${this.getAllBusinessP()}\n`;

      this.listOfFlights.forEach(function (flight) {
        result +=
`\tTotal flight number of passengers in business category: ${flight.getBusinessP()}  
\t\t\t${flight.getData()}`;
      })
      return result;
    }
  }


  function createFlight(relation, date) {
    return new Flight(relation, date)
  }


  function createPassenger(name, surname, seatNumber, seatCatgory) {
    let person = new Person(name, surname);
    let seat = new Seat(seatNumber, seatCatgory);
    return new Passenger(person, seat);
  }

  //testing
  try {
    let nikolaTesla = new Airport();

    let flight1 = createFlight('Belgrade - New York', 'Oct 25 2017')
    let flight2 = createFlight('Barcelona - Belgrade', 'Nov 11 2017')

    let passenger1 = createPassenger('John', 'Snow', 1, 'b')
    let passenger2 = createPassenger('Cersei', 'Lannister', 2, 'b')
    let passenger3 = createPassenger('Daenerys', 'Targaryen', 14)
    let passenger4 = createPassenger('Tyrion', 'Lannister')

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