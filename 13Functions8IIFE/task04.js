/*4.	Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
Input: pera peric
	Output: pera.peric@gmail.com
*/

var name = 'pera';
var surname = 'peric';

var email = (function (name, surname) {
 return	email = name + '.' + surname + '@gmail.com';	
})(name, surname)

console.log(email);