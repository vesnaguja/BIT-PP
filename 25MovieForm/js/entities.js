// konstruktorske f-je za movie, program i festival

// konstruktorska f-ja za movie
function Movie(title, length, genre) {
  this.title = title;
  this.length = parseInt(length);
  this.genre = genre;
}

Movie.prototype.getData = function () {
  return this.title + ', ' + this.length + 'min, ' + (this.genre[0] + this.genre[this.genre.length - 1]).toUpperCase();
}

// konstruktorska f-ja za program
function Program(date) {
  this.date = new Date(date);
  this.listOfMovies = [];
}

Program.prototype.addMovie = function (movie) {
  if (!movie || !(movie instanceof Movie)) {
    return ('Invalid input!');   
  }
  this.listOfMovies.push(movie);
}

Program.prototype.numOfMovies = function () {
  return this.listOfMovies.length;
}

Program.prototype.programDuration = function () {
  var duration = 0;
  this.listOfMovies.forEach(function (movie) {
    duration += movie.length;
  })
  return duration;
}

Program.prototype.getData = function () {
  var day = this.date.getDate();
  var month = this.date.getMonth() + 1;
  var year = this.date.getFullYear();
  var date = day + '.' + month + '.' + year;
  var result = date;
  if (this.numOfMovies() === 0) {
    return result += ', Program to be announced.';
  }
  return result += ', ' + this.numOfMovies() + ' movies, duration: ' + this.programDuration() + 'min'; 
}


// konstruktorska f-ja za festival
function Festival() {
  this.listOfAllMovies = [];
  this.listOfPrograms = [];
}

Festival.prototype.addMovie = function (movie) {
  this.listOfAllMovies.push(movie);
}

Festival.prototype.addProgram = function (program) {
  this.listOfPrograms.push(program);
}