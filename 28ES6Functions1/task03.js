//3.	Write a program that checks if a given number is a three digit long number.

function threeDigitNumber(number) {
  if (number < 0) {
    number *= -1;
  }
  if (number >= 100 && number < 1000) {
    return true;
  }
  return false;
}

console.log(threeDigitNumber(-999));

// ES6

const isThreeDigitNum = (number) => {
  return Math.abs(number) >= 100 && Math.abs(number) < 1000; // ako je uslov zadovoljen, vratice true, a ako nije zadovoljen false - ne moram da pisem true i false
}

console.log(isThreeDigitNum(-100.2));


// other way

const isThreeDigitNum = (num) => {
  // parseInt to ignore decimal places
  const int = parseInt(num);

  // abs to ignore negative sign 
  const absoluteValue = Math.abs(int);

  // convert number to string and get its length
  const numberLength = absoluteValue.toString().length;

  return numberLength === 3;
}


console.log(isThreeDigitNum(-523));