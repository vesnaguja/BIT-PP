/*5.	Write a function that filters all the strings from the given array that contain substring JS or js.
	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
	Output: ['babel.js, 'JS standard']
*/

const words = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'];

const filterJS = words => words.filter(word => word.toLowerCase().includes('js'))

console.log(filterJS(words));