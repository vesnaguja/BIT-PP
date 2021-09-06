/*Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */

var a = 2;
var b = 1;
var c = 1;

/*if (a>b && a>c && b>c) {
  console.log(a, b, c);
} 
else if (a>b && a>c && c>b) {
  console.log(a, c, b);
}
else if (b>a && b>c && a>c) {
  console.log(b, a, c);
}
else if (b>a && b>c && c>a) {
  console.log(b, c, a);
}
else if (c>a && c>b && a>b) {
  console.log(c, a, b);
}
else if (c>a && c>b && b>a) {
  console.log(c, b, a)
}*/

if (a >= b && a >= c) {
  if (b > c) {
    console.log(a + ", " + b + ", " + c);
  } else {
    console.log(a + ", " + c + ", " + b);
  }
} else if (b > c && b > c) {
  if (a > c) {
    console.log(b + ", " + a + ", " + c);
  } else {
    console.log(b + ", " + c + ", " + a);
  }
} else if (c > a && c > b) {
  if (a > b) {
    console.log(c + ", " + a + ", " + b);
  } else {
    console.log(c + ", " + b + ", " + a);
  }
}

// using built-in sort method
const sortNumbers = (num1, num2, num3) => {
  const numbers = [num1, num2, num3];
  numbers.sort((a, b) => b - a);
  let number = numbers.join(',');
   return number;
}

console.log(sortNumbers(0, -1, 4));

// 
// const sortNumbers = (num1, num2, num3) => {
//   const numbers = [num1, num2, num3];
//   return numbers.sort((a, b) => b - a);
// }

// console.log(sortNumbers(0, -1, 4));