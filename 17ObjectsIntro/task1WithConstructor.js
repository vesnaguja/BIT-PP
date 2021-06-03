/*1.	Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!
*/

function Coffee(n, s, f, m, sug) {
  this.name = n;
  this.strength = s;
  this.flavour = f;
  this.milk = m;
  this.sugar = sug;
}

var coffee1 = new Coffee('domaca', 'jaka', 'standardni', 'bez', '1 kafena kasika');
var coffee2 = new Coffee('latte', 'slaba', 'karamel', 'pola solje', '2 kafene kasike');

console.log(coffee1);
console.log(coffee2);