'use strict';

// Create a new JavaScript file named shopping.js and make it so that all code written in the file follows strict mode.

// Create an anonymous immediately-invoking function that will hold the main execution of all program calls. Writing a simple command console.log(“Hi”) inside this function and running the code should output “Hi“ in the console.

(function () {
  console.log('Hi');

})();

// Create constructor functions with properties representing the following “things”:
// ●	Product - product id (random number of 5 digits generated on every product creation), name, price (with 2 decimal places), expiration date
// ●	ShoppingBag - a list of products (initially empty; function constructor does not have any input parameters)

function Product(name, price, expiryDate) {
  this.id = Math.floor(Math.random() * (99999 - 10000) + 10000);
  this.name = name;
  this.price = Number(price.toFixed(2));
  this.expirationDate = new Date(expiryDate + ' 01:00:00');

  this.getInfo = function () {
    var newName = this.name[0] + this.name[this.name.length - 1];
    var nameAndID = newName.toUpperCase() + this.id;
    return [nameAndID, this.name, this.price].join(', ');
  }
}

// function productIDgenerator() {
//   return Math.floor(Math.random() * (99999 - 10000) + 10000);
// }
// var randomNum = productIDgenerator();
// console.log(randomNum);


var bag = new ShoppingBag()

var product1 = new Product('Banana', 200, 'December 1, 2021');

bag.addProduct(product1);
bag.addProduct(product1);

bag.averagePrice();


//Add addProduct method to ShoppingBag. It should receive a Product and add it to the product list. You can add a product to the list only if it has a valid expiration date.  

function ShoppingBag() {
  this.listOfProducts = [];

  this.addProduct = function (p) {
    if (p instanceof Product && new Date() < p.expirationDate) {
      this.listOfProducts.push(p);
    }
  }

  // Add a method to ShoppingBag that calculates the average product price of products in your product list and prints out this value with the precision of three decimals. 
  this.averagePrice = function () {


    // var totalPrice = 0;
    // this.listOfProducts.forEach(function(p) {
    //   totalPrice += Number(p.price);
    // })

    var totalPrice = this.listOfProducts.reduce(function(total, p) {
      return total += p.price;
    }, 0)

    console.log((totalPrice/this.listOfProducts.length).toFixed(3));
  }
};