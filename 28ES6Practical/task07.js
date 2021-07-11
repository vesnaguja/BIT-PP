/*7.	Write a function that filters all integer arguments that contain digit 5.
	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
	Output: [45, 553]
*/


const getInteger = arrg => arrg.filter((e) => Number.isInteger(e) && e.toString().indexOf("5") != -1);

console.log(getInteger([23, 11.5, 9, 'abc', 45, 28, 553]));
