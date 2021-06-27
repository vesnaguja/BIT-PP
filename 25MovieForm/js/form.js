var festival = new Festival();

var inputTitleElement = document.querySelector('#title');
var inputLengthElement = document.querySelector('#length');
var selectGenreElement = document.querySelector('#genre');

var movieErrorElement = document.querySelector('#movie-error');
var movieSelectElement = document.querySelector('#movie-select');
var ulMovieListElement = document.querySelector('#movie-list');
var createMovieButton = document.querySelector('#create-movie');

var inputDateElement = document.querySelector('#date');
var programErrorElement = document.querySelector('#program-error');
var ulProgramListElement = document.querySelector('#program-list');
var programSelectElement = document.querySelector('#program-select');
var createProgramButton = document.querySelector('#create-program')

var addMovieToProgramButton = document.querySelector('#add-movie');

var selectMovieElement = document.querySelector('#movie-select');
var selectProgramElement = document.querySelector('#program-select');

// kreiranje filma
function addMovie() {
  var titleValue = inputTitleElement.value;
  var lengthValue = inputLengthElement.value;
  var genreValue = selectGenreElement.value;

  if (!titleValue || !lengthValue || !genreValue.replace('-', '')) {
    movieErrorElement.textContent = 'All input fields are required!';
    return;
  } else {
    movieErrorElement.textContent = '';
  }

  var movie = new Movie(titleValue, lengthValue, genreValue);

  festival.listOfAllMovies.push(movie);
  var index = festival.listOfAllMovies.length - 1;

  var movieDataLi = document.createElement('li');
  movieDataLi.textContent = movie.getData();
  ulMovieListElement.appendChild(movieDataLi);

  var movieOption = document.createElement('option');
  movieOption.textContent = movie.title;
  movieOption.setAttribute('value', index);
  movieSelectElement.appendChild(movieOption);

  inputTitleElement.value = '';
  inputLengthElement.value = '';
  selectGenreElement.value = '';
}


// kreiranje programa
function addProgram() {
  if (!inputDateElement.value) {
    programErrorElement.textContent = 'Date required!';
    return;
  }
  var date = new Date(inputDateElement.value);
  if (date.getTime() < Date.now()) {
    programErrorElement.textContent = 'Invalide date!';
    return;
  }
  hasProgramWithSameDate = festival.listOfPrograms.some(function (program) {
    return date.getTime() === program.date.getTime();
  })

  if (hasProgramWithSameDate) {
    //alert('Program for that date already exists.');
    programErrorElement.textContent = 'Program for that date already exists.';
    return;
  }
  programErrorElement.textContent = '';

  var program = new Program(date);

  festival.listOfPrograms.push(program);
  var index = festival.listOfPrograms.length - 1;

  var li = document.createElement('li');
  li.textContent = program.getData();
  ulProgramListElement.appendChild(li);

  var option = document.createElement('option');
  option.setAttribute('value', index);
  option.textContent = program.getData();
  programSelectElement.appendChild(option);
}

// dodavanje filma u program
function addMovieToProgram() {
  var programListElements = document.querySelectorAll('#program-list li');
  var programSelectOptions = document.querySelectorAll('#program-select option');

  var movieValue = selectMovieElement.value;
  var programValue = selectProgramElement.value;

  var movie = festival.listOfAllMovies[movieValue];
  var program = festival.listOfPrograms[programValue];
  
  var oldProgramData = program.getData();

  // da ne dodam isti film 2 puta u program
  var sameMovie = program.listOfMovies.some(function (currentMovie) {
    return movie.getData() === currentMovie.getData();
  })  
  if (sameMovie) {
    alert('Movie already exists in program');
  }

  program.addMovie(movie);

  programListElements.forEach(function (li) {
    if (li.textContent === oldProgramData) {
      li.textContent = program.getData();
    }
  });

  programSelectOptions.forEach(function (option) {
    if (option.textContent === oldProgramData) {
      option.textContent = program.getData();
    }
  })

}

createMovieButton.addEventListener('click', addMovie);
createProgramButton.addEventListener('click', addProgram);
addMovieToProgramButton.addEventListener('click', addMovieToProgram);