/*4.	Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
○	Add a method that prints out all the ingredients necessary for the meal preparation. 
○	Add a method that checks if a meal can be prepared for 15 minutes. 
○	Add a method that changes the type of cuisine to the given value. 
○	Add a method that delete a given ingredient from the list of ingredients.  
*/


function createCulinaryRecipe(dish, cuisine, difficulty, ingredients, prepTime, prepInst) {

  var culinaryRecipe = {
    name: dish,
    typeOfCuisine: cuisine,
    complexity: difficulty,
    listOfIngredients: ingredients,
    preparingTime: prepTime,
    preparingInstruction: prepInst,

    printIngredients: function () {
      console.log(culinaryRecipe.listOfIngredients);
    },

    preparedIn15min: function () {
      if (culinaryRecipe.preparingTime <= 15) {
        console.log('Meal can be prepared in 15 minutes.');
      } else {
        console.log('Meal cannot be prepared in 15 minutes.');
      }
    },

    changeTypeOfCuisine: function (changeType) {
      console.log(culinaryRecipe.typeOfCuisine = changeType);
    },

    deleteIngredient: function (ingredient) {
      var newListOfIngrediants = [];
      for (var i = 0; i < culinaryRecipe.listOfIngredients.length; i++) {
       if (culinaryRecipe.listOfIngredients[i] !== ingredient) {
        newListOfIngrediants[newListOfIngrediants.length] = culinaryRecipe.listOfIngredients[i];
       }        
      }
      culinaryRecipe.listOfIngredients = newListOfIngrediants;
     }

  }
  return culinaryRecipe;
}

var recipe1 = createCulinaryRecipe('musaka', 'srpska', 3, ['krompir', 'meso', 'luk'], 60, 'meso i luk isprziti, sipati preko krompira i peci u rerni')

recipe1.printIngredients();

recipe1.preparedIn15min();

recipe1.changeTypeOfCuisine('Turska');

recipe1.deleteIngredient('luk');

recipe1.printIngredients();
