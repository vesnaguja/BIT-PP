'use strict';

(function () {
  function Genre(name) {
    this.name = name;
    this.getData = function () {
      return (this.name[0] + this.name[this.name.length - 1]).toString().toUpperCase();
    }
  }

  function Movie(title, genre, length) {
    if (!genre || !(genre instanceof Genre)) {
      throw new Error('Movie: Invalid genre input')
    }

    if (typeof (length) !== 'number') {
      throw new Error('Movie: Invalid movie length input')
    }
    this.title = title;
    this.genre = genre;
    this.length = length;

    this.getData = function () {
      return `${this.title}, ${this.length} min, ${genre.getData()}`;
    }
  }

  function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.numOfMovies = this.listOfMovies.length;

    this.addMovie = function (movie) {
      let movieGenre = movie.genre.name;

      let listOfSameGenreMovies = this.listOfMovies.filter(function (m) {
        return m.genre.name === movieGenre;
      })

      if (listOfSameGenreMovies.length + 1 > 4) { // trenutni broj filmova istog zanra kao trenutni + film koji pokusavamo da dodamo
        throw new Error('Program cannot have more than 4 movies of the same genre')
      }

      if (this.programDuration() + movie.length > 480) { // trenutna duzina svih filmova u programu + duzina filma koji pokusavamo da dodamo
        throw new Error('Length of all movies in a list can not be longer than 8 hours (480 min)')
      }

      this.listOfMovies.push(movie);
    }

    this.programDuration = function () {
      return this.listOfMovies.reduce(function (total, movie) {
        total += movie.length;
      }, 0);
    }

    this.getData = function () {
      let result = '';
      let day = this.date.getDate();
      let month = this.date.getMonth() + 1;
      let year = this.date.getFullYear();
      result += `\t ${day}.${month}.${year}, program duration ${this.programDuration()} min \n`;
      this.listOfMovies.forEach(function (movie) {
        result += `\t\t\t\t\t\t ${movie.getData()}\n`;
      })
      return result;
    }
  }

  function Festival(festivalName, maxNumOfMovies) {
    this.festivalName = festivalName;
    this.listOfPrograms = [];
    this.maxNumOfMovies = maxNumOfMovies;
    if (typeof (maxNumOfMovies) !== 'number') {
      throw new Error('Festival: Invalid number for maximum number of movies input')
    }

    this.numOfMoviesInAllProg = function () {
      let allMovies = 0;
      this.listOfPrograms.forEach(function (program) {
        allMovies += program.listOfMovies.length
      })
      return allMovies;
    }


    this.addProgram = function (program) {
      if (this.numOfMoviesInAllProg() + 1 >= maxNumOfMovies) {
        throw new Error('Festival: Maximum number of movies is ' + this.maxNumOfMovies)
      }
      return this.listOfPrograms.push(program);
    }


    this.getData = function () {
      if (this.numOfMoviesInAllProg() === 0) {
        return 'Program to be announced';
      }
      let result = `${this.festivalName} has ${this.numOfMoviesInAllProg()} movie titles \n`;
      this.listOfPrograms.forEach(function (program) {
        result += `\t\t ${program.getData()}`;
      })
      return result;
    }
  }

  function createMovie(title, genre, length) {
    return new Movie(title, genre, length);
  }

  function createProgram(date) {
    return new Program(date);
  }


  // testing
  try {
    let genre1 = new Genre('Action');
    let genre2 = new Genre('Drama');
    let genre3 = new Genre('Western');
    let genre4 = new Genre('Comedy');
    // console.log(genre1.getData());
    let movie1 = createMovie('Spider-Man: Homecoming', genre2, 100);
    let movie2 = createMovie('War for the Planet of the Apes', genre2, 100);
    let movie3 = createMovie('The Dark Tower', genre2, 100);
    let movie4 = createMovie('Deadpool', genre2, 100);
    let movie5 = createMovie('Deadpool 2', genre3, 80);
    //console.log(movie1.getData());
    let program1 = createProgram('Oct-28-2017')
    let program2 = createProgram('Oct-29-2017')
    //console.log(program1);
    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program1.addMovie(movie3);
    program1.addMovie(movie4);
    program1.addMovie(movie5);
    program2.addMovie(movie4);
    program2.addMovie(movie5);
    //console.log(program1.getData());
    let festival1 = new Festival('Weekend festival', 8);
    festival1.addProgram(program1)
    festival1.addProgram(program2)
    console.log(festival1.getData());
    let festival2 = new Festival('Kustendorf', 2);
    console.log(festival2.getData());
    //console.log(festival1.listOfPrograms[0].listOfMovies[0]);

  } catch (error) {
    console.log('Error message: ' + error.message);
  }

})();