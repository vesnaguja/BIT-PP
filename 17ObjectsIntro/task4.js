/*4.	Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
○	Add a method that prints out all the ingredients necessary for the meal preparation. 
○	Add a method that checks if a meal can be prepared for 15 minutes. 
○	Add a method that changes the type of cuisine to the given value. 
○	Add a method that delete a given ingredient from the list of ingredients.  
*/

function createCulinaryRecipe(dish, cuisine, difficulty, ingredients, prepTime, instruction) {

  if (difficulty < 1 || difficulty > 5) {
    difficulty = 'unknown';
  }

  var culinaryRecipe = {
    name: dish,
    typeOfCuisine: cuisine,
    complexity: difficulty,
    listOfIngredients: ingredients,
    preparingTime: prepTime,
    preparingInstruction: instruction,
    printIngredients: function () {
      var out = '';
      for (let i = 0; i < this.listOfIngredients.length; i++) {
        if (i === this.listOfIngredients.length - 1) {
          out += this.listOfIngredients[i]
        } else {
          out += this.listOfIngredients[i] + '\n';
        }
      }
      console.log(out);
    },
    prparedIn15min: function () {
      if (this.preparingTime <= 15) {
        return true;
      }
      return false;
    },
    setCousine: function (newCuisine) {
      this.typeOfCuisine = newCuisine;
    },
    deleteIngredient: function (ingrediant) {
      var newListOfIngrediants = [];

      for (let i = 0; i < this.listOfIngredients.length; i++) {
        if (this.listOfIngredients[i] !== ingrediant) {
          newListOfIngrediants[newListOfIngrediants.length] = this.listOfIngredients[i];
          //newListOfIngrediants.push(this.listOfIngredients[i])
        }
      }

      this.listOfIngredients = newListOfIngrediants;

      //var ingrediantIndex = this.listOfIngredients.indexOf(ingrediant);
      //this.listOfIngredients.splice(ingrediantIndex, 1);
    }
  }
  return culinaryRecipe;
}


var recipe1 = createCulinaryRecipe('Musaka', 'Turkish', 3, ['meat', 'potato', 'onion'], 45, 'Isprziti luk i meso, rasporediti izmedju 2 reda krompira, peci u rerni');

//prints out all the ingredients necessary for the meal preparation
console.log('Ingredients:');
recipe1.printIngredients();

//checks if a meal can be prepared in 15 minutes
if (recipe1.prparedIn15min()) {
  console.log('Meal can be prepared in 15 minutes.');
} else {
  console.log('Meal can not be prepared in 15 minutes.');
}

//change the type of cuisine to the given value ???
recipe1.setCousine('Serbian');
console.log('Type of cousine: ' + recipe1.typeOfCuisine);

//delete a given ingredient from the list of ingredients
recipe1.deleteIngredient('onion');

console.log('Ingredients:');
recipe1.printIngredients();

