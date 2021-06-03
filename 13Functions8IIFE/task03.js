/*3.	Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
	Input: prograMming
	Output: progra**ing, 2
*/

var string = 'prograMming';


var replaceWithStar = (function (newString) {
	var newString = '';
	var counter = 0;

	for (var i = 0; i < string.length; i++) {
		if (string[i] === 'm' || string[i] === 'M') {
			newString += '*';
			counter++;
			continue;
		}
		newString += string[i];
	}
	return [newString, counter];

})(string);

console.log(replaceWithStar);