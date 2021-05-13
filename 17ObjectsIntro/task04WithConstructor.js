/*4.	Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
○	Add a method that prints out all the ingredients necessary for the meal preparation. 
○	Add a method that checks if a meal can be prepared for 15 minutes. 
○	Add a method that changes the type of cuisine to the given value. 
○	Add a method that delete a given ingredient from the list of ingredients.  
*/


function Recipe(n, toc, c, loi, pt, pi) {
  this.name = n;
  this.typeOfCuisine = toc;
  this.complexity = c;
  this.listOfIngredients = loi;
  this.preparingTime = pt;
  this.preparingInstruction = pi;

  this.printIngredients = function () {
    console.log(this.listOfIngredients);
  };

  this.preparedIn15min = function () {
    return this.preparingTime <= 15;
  };

  this.changeCuisine = function (newCuisine) {
    this.typeOfCuisine = newCuisine;
  }

  this.deleteIngredient = function (ingredient) {
    var newListOfIngrediants = [];
    for (let i = 0; i < this.listOfIngredients.length; i++) {
      if (this.listOfIngredients[i] !== ingredient) {
        newListOfIngrediants[newListOfIngrediants.length] = this.listOfIngredients[i];
      }
    }
    this.listOfIngredients = newListOfIngrediants;
  }

}


var recept1 = new Recipe('musaka', 'srpska', 3, ['krompir', 'meso', 'luk'], 60, 'meso i luk isprziti, sipati preko krompira i peci u rerni');
var recept2 = new Recipe('pilav', 'turska', 3, ['pirinac', 'piletina', 'povrce'], 70, 'sastojci se pomesaju i peku u rerni');


console.log(recept1);
console.log(recept2);

console.log('-----------------------------------------');

console.log(recept1.preparingTime);
console.log(recept2.preparingTime);

console.log('-----------------------------------------');

recept1.printIngredients();
recept2.printIngredients();

console.log('-----------------------------------------');

console.log(recept1.preparedIn15min());
console.log(recept2.preparedIn15min());

console.log('-----------------------------------------');

recept1.changeCuisine('Turska');
console.log(recept1);

console.log('-----------------------------------------');

recept2.deleteIngredient('povrce');
console.log(recept2);

console.log('-----------------------------------------');

recept1.listOfIngredients.push('pavlaka');
console.log(recept1);