//5.	Write a program that prints a multiplication table for numbers up to 12.



function multiplicationTable(number) {
  var proizvod = 1;
  var result = '';

  for (var i = 1; i <= number; i++) {
    for (var j = 1; j <= number; j++) {
      proizvod = i * j;
      result += i + ' * ' + j + ' = ' + proizvod + '\n';
    }
  }
  return result;
}


var number = 12;
console.log(multiplicationTable(number));