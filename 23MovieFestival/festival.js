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
    this.title = title;
    this.genre = genre;
    this.length = length;
    this.getData = function () {
      return this.title + ', ' + this.length + 'min, ' + genre.getData();
    }
  }

  function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.numOfMovies = this.listOfMovies.length;
    this.addMovie = function (movie) {
      return this.listOfMovies.push(movie);
    }
    this.programDuration = function () {
      var duration = 0;
      this.listOfMovies.forEach(function (movie) {
        duration += movie.length;
      })
      return duration;
    }
    this.getData = function () {
      var result ='';     
      var day = this.date.getDate();
      var month = this.date.getMonth() + 1;
      var year = this.date.getFullYear();
      result += '\t' + day + '.' + month + '.' + year + ', program duration ' + this.programDuration() + 'min \n';
      this.listOfMovies.forEach(function (movie) {
        result += '\t\t\t\t\t\t' + movie.getData() + '\n';
      })
      return result;
    }
  }

  function Festival(festivalName) {
    this.festivalName = festivalName;
    this.listOfPrograms = [];
    this.numOfMoviesInAllProg = function () {
      var allMovies = 0;
      this.listOfPrograms.forEach(function (program) {
        allMovies += program.listOfMovies.length
      })
      return allMovies;
    }
    this.addProgram = function (program) {
      return this.listOfPrograms.push(program);
    }
    this.getData = function () {
      var result = this.festivalName + ' has ' + this.numOfMoviesInAllProg() + ' movie titles \n';
      this.listOfPrograms.forEach(function (program) {
        result += '\t\t' + program.getData();
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
    var genre1 = new Genre('Action');
    var genre2 = new Genre('Drama');
    var genre3 = new Genre('Western');
    var genre4 = new Genre('Comedy');
    // console.log(genre1.getData());
    var movie1 = createMovie('Spider-Man: Homecoming', genre1, 133);
    var movie2 = createMovie('War for the Planet of the Apes', genre2, 140);
    var movie3 = createMovie('The Dark Tower', genre3, 95);
    var movie4 = createMovie('Deadpool', genre4, 108);
    //console.log(movie1.getData());
    var program1 = createProgram('Oct-28-2017')
    var program2 = createProgram('Oct-29-2017')
    //console.log(program1);
    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program1.addMovie(movie3);
    program2.addMovie(movie4);
    //console.log(program1.getData());
    var festival1 = new Festival('Weekend festival');
    festival1.addProgram(program1)
    festival1.addProgram(program2)
    console.log(festival1.getData());
    //console.log(festival1.listOfPrograms[0].listOfMovies[0]);

  } catch (error) {
    console.log('Error message: ' + error.message);
  }

})();