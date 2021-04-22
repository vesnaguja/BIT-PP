/*3.	Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
●	takes 2 arguments: age, amount per day.
●	calculates the amount consumed for rest of the life (based on a constant max age).
●	outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.

Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

function calculateSupply(age, amountPerDay) {
 var maxAge = 100;
 var total = (parseInt(amountPerDay) * 365) * (maxAge - age);
  
  return 'You will need ' + total + ' to last you until the ripe old age of ' + maxAge;
}

console.log(calculateSupply(35, 1.5));