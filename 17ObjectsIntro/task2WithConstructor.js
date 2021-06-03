/*2.	Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. */

function Movie (t, a, d, g, p) {
  this.title = t;
  this.actors = a;
  this.director = d;
  this.genre = g;
  this.IMDbRating = p;
}

var movie1 = new Movie('Amelie', ['Audrey Tautou', 'Mathieu Kassovitz'], 'Jean-Pierre Jeunet', 'Romance', 8.3);

console.log(movie1);
