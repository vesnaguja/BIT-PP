//4.	Write a program that calculates an arithmetic mean of four numbers.

const arithmeticMean = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4) / 4;

console.log(arithmeticMean(1, 1, 1, 5));

// 	Write a program that calculates an arithmetic mean of n numbers.

const arithmeticMean = (...args) => {
  let sum = 0;
  args.forEach(arg => sum += arg)
  return sum / args.length
}

console.log(arithmeticMean(1, 2, 3, 5, 6));

