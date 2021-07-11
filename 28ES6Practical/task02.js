/*2.	Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
	Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
	Output2: [ 24, 20 ] // tax only
    */


const calcSaleTax = ({name, price}) => {
    const tax = 20;
    price = price + price * tax / 100;
    return {name, price}
};


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

console.log(calcSaleTax({name:'Banana', price:120}));
console.log(calcSaleTax({name:'Orange', price:100}));