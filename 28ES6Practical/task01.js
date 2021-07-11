/*1.	Write a function that capitalizes the first letter of each string argument it receives.  
	Function arguments: ['hello', 'there', 'ES', 6]
	Output: ['Hello', 'There', 'ES']
*/

const capitalizesFirst = (...args) => {
	let newArray = [];

	args.forEach((el) => {
		if (typeof el === 'string') {
			newArray.push(`${el.charAt(0).toUpperCase()}${el.slice(1)}`);
		}
	})
	return newArray
}


console.log(capitalizesFirst('hello', 'there', 'ES', 6));