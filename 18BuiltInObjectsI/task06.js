// 6.	
// a.	Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
var products = [{
    name: 'apples',
    price: 100
  },
  {
    name: 'milk',
    price: 80
  },
  {
    name: 'bananas',
    price: 150
  }
];


// b.	Write a function that calculates the total price of your shopping list. 

// var totalPrice = products.reduce(function(currentTotal, product) {
//   return product.price + currentTotal;
// }, 0)

function calculateTotalPrice(shoppingList) {
  var total = 0
  shoppingList.forEach(function (e) {
    total += e.price;
  })
  return total;
}

console.log(calculateTotalPrice(products));

// c.	Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 

function calculateAveragePrice(shoppingList) {
  var total = 0;
  var averagePrice = 0;

  shoppingList.forEach(function (e) {
    total += e.price;
  })
  averagePrice = total / shoppingList.length;
  return averagePrice;
}

console.log('Average price: ' + calculateAveragePrice(products).toFixed(3));

// koristeci prethodnu f-ju:

function calculateAveragePrice(shoppingList) {
  var averagePrice = 0;
  return averagePrice = calculateTotalPrice(shoppingList) / shoppingList.length;
}

console.log(calculateAveragePrice(products));

// d.	Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 

function printMostExpensive(shoppingList) {  
  var theMostExpensive;
  theMostExpensive = shoppingList.sort(function (a,b) {
    return b.price - a.price;
  })
  console.log(shoppingList[0].name.toUpperCase());
}

printMostExpensive(products);