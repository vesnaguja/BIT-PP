'use strict';

(function () {

  function Continent(short, long) {
    var continentNames = ['EU-Europe', 'AS-Asia', 'AF-Africa', 'SA-South America', 'NA-North America', 'AU-Australia'];

    if (continentNames.includes(short + '-' + long)) {
      this.short = short;
      this.long = long;
    }
  }
  var continents = Object.freeze({
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
    this.countryName = countryName.slice(0, 2).toUpperCase();;
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
      var day = this.dateOfBirth.getDate();
      var month = this.dateOfBirth.getMonth() + 1;
      var year = this.dateOfBirth.getFullYear();
      var result = day + '.' + month + '.' + year;

      return [this.name, this.surname, result].join(' ');
    }

    this.getAge = function () {
      var currentYear = (new Date()).getFullYear();
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
      return this.country.countryName + ', ' + (this.country.odds * this.betAmount).toFixed(2) + ' eur, ' + this.person.name + ' ' + this.person.surname + ', ' + this.person.getAge() + ' years';
      //return `${this.country.name}, ${(this.country.odds * this.betAmount)} eur, ${this.person.name} ${this.person.surname}, ${this.person.getAge()} years`;
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
      return this.street + ' ' + this.number + ', ' + this.postalCode + ' ' + this.city + ', ' + this.country.countryName;
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
      var sum = 0;
      this.listOfPlayers.forEach(function (player) {
        sum += player.betAmount;
      })
      return sum + 'eur';
    }

    this.getData = function () {
      return this.address.street + ', ' + this.address.postalCode + ' ' + this.address.city + ', sum of all bets: ' + this.getTotalBetAmount();
    }

  }

  function BettingHouse(competition, numberOfPlayers) {
    this.competition = competition;
    this.listOfBettingPlaces = [];
    this.numberOfPlayers = numberOfPlayers;
  }

  function createPlayer(name, surname, dateOfBirth, countryName, odds, continent, betAmount) {
    var person = new Person(name, surname, dateOfBirth);
    var country = new Country(countryName, odds, continent);

    return new Player(person, betAmount, country);
  }

  //testing
  try {
    var person1 = new Person('Pera', 'Peric', 'May 14, 1992');
    //console.log(person1.getData());

    var country1 = new Country('Srbija', 4.76, continents.EUROPE);

    var player1 = createPlayer('Pera', 'Peric', 'May 14, 1992', 'Srbija', 4.76, continents.EUROPE, 1050);
    console.log(player1.getData());

    var address1 = new Address(country1, 'Beograd', '11000', 'Nemanjina', 4);
    console.log(address1.getData());

    //var bettingPlace1 = new BettingPlace(address1, player1);
    //bettingPlace1.addPlayer(player1);
    //console.log(bettingPlace1.listOfPlayers);
    // console.log(bettingPlace1.getData());

  } catch (error) {
    console.log('Error message: ' + error.message);
  }

})();