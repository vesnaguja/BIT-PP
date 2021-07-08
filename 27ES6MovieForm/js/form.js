let festival = new Festival();

let inputTitleElement = document.querySelector('#title');
let inputLengthElement = document.querySelector('#length');
let selectGenreElement = document.querySelector('#genre');

let movieErrorElement = document.querySelector('#movie-error');
let movieSelectElement = document.querySelector('#movie-select');
let ulMovieListElement = document.querySelector('#movie-list');
let createMovieButton = document.querySelector('#create-movie');

let inputDateElement = document.querySelector('#date');
let programErrorElement = document.querySelector('#program-error');
let ulProgramListElement = document.querySelector('#program-list');
let programSelectElement = document.querySelector('#program-select');
let createProgramButton = document.querySelector('#create-program')

let addMovieToProgramButton = document.querySelector('#add-movie');

let selectMovieElement = document.querySelector('#movie-select');
let selectProgramElement = document.querySelector('#program-select');

// kreiranje filma
function addMovie() {
  let titleValue = inputTitleElement.value;
  let lengthValue = inputLengthElement.value;
  let genreValue = selectGenreElement.value;

  if (!titleValue || !lengthValue || !genreValue.replace('-', '')) {
    movieErrorElement.textContent = 'All input fields are required!';
    return;
  } else {
    movieErrorElement.textContent = '';
  }

  let movie = new Movie(titleValue, lengthValue, genreValue);

  festival.listOfAllMovies.push(movie);
  let index = festival.listOfAllMovies.length - 1;

  let movieDataLi = document.createElement('li');
  movieDataLi.textContent = movie.getData();
  ulMovieListElement.appendChild(movieDataLi);

  let movieOption = document.createElement('option');
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
  let date = new Date(inputDateElement.value);
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

  let program = new Program(date);

  festival.listOfPrograms.push(program);
  let index = festival.listOfPrograms.length - 1;

  let li = document.createElement('li');
  li.textContent = program.getData();
  ulProgramListElement.appendChild(li);

  let option = document.createElement('option');
  option.setAttribute('value', index);
  option.textContent = program.getData();
  programSelectElement.appendChild(option);
}

// dodavanje filma u program
function addMovieToProgram() {
  let programListElements = document.querySelectorAll('#program-list li');
  let programSelectOptions = document.querySelectorAll('#program-select option');

  let movieValue = selectMovieElement.value;
  let programValue = selectProgramElement.value;

  let movie = festival.listOfAllMovies[movieValue];
  let program = festival.listOfPrograms[programValue];
  
  let oldProgramData = program.getData();

  // da ne dodam isti film 2 puta u program
  let sameMovie = program.listOfMovies.some(function (currentMovie) {
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