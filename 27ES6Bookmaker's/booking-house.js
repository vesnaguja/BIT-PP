'use strict';

(function () {

  function Continent(short, long) {
    let continentNames = ['EU-Europe', 'AS-Asia', 'AF-Africa', 'SA-South America', 'NA-North America', 'AU-Australia'];

    if (continentNames.includes(short + '-' + long)) {
      this.short = short;
      this.long = long;
    }
  }
  let continents = Object.freeze({
    ASIA: new Continent('AS', 'Asia'),
    EUROPE: new Continent('EU', 'Europe'),
    AFRICA: new Continent('AF', 'Africa'),
    SOUTH_AMERICA: new Continent('SA', 'South America'),
    NORTH_AMERICA: new Continent('NA', 'North America'),
    AUSTRALIA: new Continent('AU', 'Australia'),
  });

  function Country(countryName, odds, continent) {
    if (!countryName || !odds || !continent) {
      throw new Error('Country: All properties are required')
    }
    if (!(continent instanceof Continent)) {
      throw new Error('Country: Invalid continent input')
    }
    this.countryName = countryName.slice(0, 2).toUpperCase();
    this.odds = odds;
    this.continent = continent;
  }

  function Person(name, surname, dateOfBirth) {
    if (!name || !surname || !dateOfBirth) {
      throw new Error('Person: All properties are required')
    }
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = new Date(dateOfBirth);

    this.getData = function () {
      let day = this.dateOfBirth.getDate();
      let month = this.dateOfBirth.getMonth() + 1;
      let year = this.dateOfBirth.getFullYear();
      let result = `${day}.${month}.${year}`;

      return [this.name, this.surname, result].join(' ');
    }

    this.getAge = function () {
      let currentYear = (new Date()).getFullYear();
      return currentYear - this.dateOfBirth.getFullYear();
    }

  }

  function Player(person, betAmount, country) {
    if (!person || !(person instanceof Person)) {
      throw new Error('Player: Invalid person input');
    }
    if (!country || !(country instanceof Country)) {
      throw new Error('Player: Invalid country input');
    }
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;

    this.getData = function () {
      return `${this.country.countryName}, ${(this.country.odds * this.betAmount)} eur, ${this.person.name} ${this.person.surname}, ${this.person.getAge()} years`;
    }
  }

  function Address(country, city, postalCode, street, number) {
    if (!country || !(country instanceof Country)) {
      throw new Error('Address: Invalid country input');
    }
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.number = number;

    this.getData = function () {
      return `${this.street} ${this.number}, ${this.postalCode} ${this.city}, ${this.country.countryName}`;
    }
  }

  function BettingPlace(address) {
    if (!address || !(address instanceof Address)) {
      throw new Error('Betting Place: Invalid address input');
    }

    this.listOfPlayers = [];
    this.address = address;

    this.addPlayer = function (player) {
      if (!player || !(player instanceof Player)) {
        throw new Error('Betting Place: Invalid player input');
      }
      this.listOfPlayers.push(player);
    }

    this.getTotalBetAmount = function () {
      let sum = 0;
      this.listOfPlayers.forEach(function (player) {
        sum += player.betAmount;
      })
      return sum + 'eur';
    }

    this.getData = function () {
      return `${this.address.street}, ${this.address.postalCode} ${this.address.city}, sum of all bets: ${this.getTotalBetAmount()}`;
    }

    this.numberOfPlayers = function () {
      return this.listOfPlayers.length;
    }

  }

  function BettingHouse(competition, numberOfPlayers) {
    this.competition = competition;
    this.listOfBettingPlaces = [];
    this.numberOfPlayers = numberOfPlayers;

    this.addBettingPlace = function (bettingPlace) {
      if (!bettingPlace || !(bettingPlace instanceof BettingPlace)) {
        throw new Error('BettingHouse: Invalid Betting Place input');
      }
      this.listOfBettingPlaces.push(bettingPlace)
    }

    this.numOfBets = function () {
      let sum = 0;
      this.listOfBettingPlaces.forEach(function (bettingPlace) {
        sum += listOfPlayers.length;
      })
      return sum;
    }

    this.getTotalBetsNumber = function () {
      let sum = 0;
      this.listOfBettingPlaces.forEach(function (bettingPlace) {
        sum += bettingPlace.numberOfPlayers()
      })
      return sum;
    }

    this.betsOnCountry = function (country) {
      let sum = 0;
      this.listOfBettingPlaces.forEach(function (bettingPlace) {
        bettingPlace.listOfPlayers.forEach(function (player) {
          if (player.country.countryName === country)
            sum += 1;
        })
      })
      return sum;
    }

    this.getData = function () {

      let result = `${this.competition}, ${this.listOfBettingPlaces.length} betting places, ${this.getTotalBetsNumber()} bets\n`;

      this.listOfBettingPlaces.forEach(function (bettingPlace) {
        result += `\t\t ${bettingPlace.getData()}\n`;

        bettingPlace.listOfPlayers.forEach(function (player) {
          result += `\t\t\t\t ${player.getData()}\n`;
        }) + '\n';
      }); + '\n';

      result += `There are ${this.betsOnCountry('SR')} bets on Serbia`;
      return result;
    }

  }

  function createPlayer(name, surname, dateOfBirth, countryName, odds, continent, betAmount) {
    let person = new Person(name, surname, dateOfBirth);
    let country = new Country(countryName, odds, continent);

    return new Player(person, betAmount, country);
  }

  function createBettingPlace(address) {
    return new BettingPlace(address);
  }

  //testing
  try {
    let person1 = new Person('Pera', 'Peric', 'May 14, 1992');
    //console.log(person1.getData());

    let country1 = new Country('Srbija', 2, continents.EUROPE);

    let player1 = createPlayer('Pera', 'Peric', 'May 14, 1992', 'Srbija', 2, continents.EUROPE, 1050);
    let player2 = createPlayer('Jovan', 'Jovanovic', 'June 14, 1990', 'Srbija', 2, continents.EUROPE, 500);
    let player3 = createPlayer('Petar', 'Petrovic', 'July 14, 1976', 'Grcka', 2, continents.EUROPE, 2000);
    let player4 = createPlayer('Marko', 'Markovic', 'April 14, 1952', 'Srbija', 2, continents.EUROPE, 50);
    //console.log(player1.getData());

    let address1 = new Address(country1, 'Beograd', '11000', 'Nemanjina', 4);
    let address2 = new Address(country1, 'Beograd', '11000', 'Juzni bulelet', 45);
    //console.log(address1.getData());

    let bettingPlace1 = createBettingPlace(address1);
    let bettingPlace2 = createBettingPlace(address2);

    bettingPlace1.addPlayer(player1);
    bettingPlace1.addPlayer(player2);
    bettingPlace2.addPlayer(player3);
    bettingPlace2.addPlayer(player4);

    //console.log(bettingPlace1.listOfPlayers);
    // console.log(bettingPlace1.getData());

    let bettingHouse1 = new BettingHouse('Football World Cup Winner');

    bettingHouse1.addBettingPlace(bettingPlace1);
    bettingHouse1.addBettingPlace(bettingPlace2);

    console.log(bettingHouse1.getData());

  } catch (error) {
    console.log('Error message: ' + error.message);
  }

})();