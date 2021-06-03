'use strict';

// Create a new JavaScript file named shopping.js and make it so that all code written in the file follows strict mode.

// Create an anonymous immediately-invoking function that will hold the main execution of all program calls. Writing a simple command console.log(“Hi”) inside this function and running the code should output “Hi“ in the console.

(function () {

  var bag = new ShoppingBag()

  var product1 = new Product('Banana', 200, 'December 1, 2021');
  var product2 = new Product('Banana2', 300, 'December 2, 2021');
  var product3 = new Product('Banana3', 400, 'December 3, 2021');

  // console.log(product1.getInfo())

  bag.addProduct(product1);
  bag.addProduct(product2);
  bag.addProduct(product3);

  //console.log(bag);

  // console.log('Average price: ' + bag.averagePrice());;
  // console.log('Most Expensive: ' + bag.getMostExpensive());
  // console.log('Total bag price: ' + bag.calculateTotalPrice());

  var kartica = new PaymentCard(1000, 'active', 'December 31, 2023')

  console.log(checkoutAndBuy(bag, kartica));

  //console.log(bag);

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


//Add addProduct method to ShoppingBag. It should receive a Product and add it to the product list. You can add a product to the list only if it has a valid expiration date.  

function ShoppingBag() {
  this.listOfProducts = [];

  this.clear = function () {
    this.listOfProducts = [];
  }

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

    // var totalPrice = this.listOfProducts.reduce(function (total, p) {
    //   return total += p.price;
    // }, 0)
    return (this.calculateTotalPrice() / this.listOfProducts.length).toFixed(3);
  }

  // Add getMostExpensive method that finds the most expensive product and prints out its info.

  this.getMostExpensive = function () {
    // nacin 1 - nadji max cenu i onda nadji product koji ima tu cenu
    // var sveCene = this.listOfProducts.map(function(p) {
    //   return p.price;
    // })

    // var najvecaCena = Math.max(...sveCene)

    // var najskuplji = this.listOfProducts.filter(function(p) {
    //   return p.price == najvecaCena;
    // })

    // console.log(najskuplji[0].getInfo());

    // nacin 2 - sortiraj po ceni i ispisi prvi
    var sortiraniPoCeniOdNajvecegKaNajmanjem = this.listOfProducts.sort(function (a, b) {
      return b.price - a.price
    })

    var najskupljiProizvod = sortiraniPoCeniOdNajvecegKaNajmanjem[0];

    return najskupljiProizvod.getInfo()
  }

  //Add calculateTotalPrice method to ShoppingBag that calculates the total price of products in the shopping bag list.   
  this.calculateTotalPrice = function () {
    return this.listOfProducts.reduce(function (total, p) {
      return total += p.price;
    }, 0);
  }
};


//Create a constructor function with properties representing the following:
// ●	PaymentCard - account balance (number with 2 decimal places), active or inactive status, valid until date	
// Create checkoutAndBuy function which receives shopping bag and payment card and prints if the purchase is successful or not. Purchase is successful only if the amount on the card is greater or equal to the total price of products in the shopping bag. If there is not enough money, print out the amount that is missing to complete the purchase.



function PaymentCard(balance, status, expireDate) {
  var statuses = ['active', 'inactive'];
  this.balance = Number(balance.toFixed(2));

  if (statuses.includes(status)) {
    this.status = status;
  } else {
    this.status = null;
  }

  this.expireDate = new Date(expireDate + ' 01:00:00');

  this.plati = function (suma) {
    if (this.balance >= suma) {
      this.balance -= suma
      //return true;
      return {
        uspelo: true,
        poruka: 'Uspesno placeno.'
      }
    } else {
      //return false;
      return {
        uspelo: false,
        poruka: 'Nemate dovoljno sredstava, fali vam: ' + (suma - this.balance) + '.'
      }
    }
  }
}


function checkoutAndBuy(shopBag, card) {
  var ukupnaCenaKorpe = shopBag.calculateTotalPrice();
  var ukupnoPara = card.balance;

  /*if(ukupnoPara >= ukupnaCenaKorpe) {
    return 'purchase is successfull'
  }
  else {
    return 'Not enough money, you are missing: ' + ( ukupnaCenaKorpe - ukupnoPara )
  }*/

  // var ukupnaCenaKorpe = shopBag.calculateTotalPrice();
  var pokusajDaPlatis = card.plati(ukupnaCenaKorpe)

  if (pokusajDaPlatis.uspelo) {
    shopBag.clear()
  }

  return pokusajDaPlatis.poruka + ' Stanje na racunu: ' + card.balance;
}