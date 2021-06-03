//4.	Write a program that calculates an arithmetic mean of four numbers.

function averageOfFour(num1, num2, num3, num4) {
  var ar = (num1 + num2 + num3 + num4) / 4;
  return ar;
}

console.log(averageOfFour(1, 2, 3, 4));


// f-ja koja prima neogranicen broj argumenata

function averageOfAll() {
  var avg;
  var sum = 0;
  var numOfArguments = arguments.length;

  for (var i = 0; i < numOfArguments; i++) {
    var currentNum = arguments[i];
    sum += currentNum;
  }

  avg = sum / numOfArguments;

  return avg;
}

console.log(averageOfAll(1, 2, 3));


// kraca verzija

function averageOfAll() {
  var avg;
  var sum = 0; 

  for (var i = 0; i < arguments.length; i++) {   
    sum += arguments[i];
  }
  return avg = sum / arguments.length; 
}

console.log(averageOfAll(1, 2, 3));
