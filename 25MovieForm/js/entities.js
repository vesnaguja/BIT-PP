function Festival() {
  this.listOfMovies = [];
  this.listOfPrograms = [];
}






function Movie(title, length, genre) {
  this.title = title;
  this.length = parseInt(length);
  this.genre = genre;
}

Movie.prototype.getGenreCode = function () {
  return (this.genre[0] + this.genre[this.genre.length - 1]).toString().toUpperCase();
}

Movie.prototype.getData = function () {
  return this.title + ', ' + this.length + 'min, ' + this.getGenreCode;
}





function Program(date) {
  this.date = new Date(date);
  this.listOfMovies = [];
}

Program.prototype.programDuration = function () {
  var duration = 0;
  this.listOfMovies.forEach(function (movie) {
    duration += movie.length;
  })
  return duration;
}

Program.prototype.addMovie = function (movie) {
  if (!movie || !(movie instanceof Movie)) {
    console.log('Invalid input!');
    return;
  }
  this.listOfMovies.push(movie);
}

Program.prototype.numOfMovies = function () {
  return this.listOfMovies.length;
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

  result += ', ' + this.numOfMovies() + ' movies, duration: ' + this.programDuration() + 'min';

  return result;
}








