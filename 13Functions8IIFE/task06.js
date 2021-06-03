/*6.	Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid. 
Input: JSGuru 
Output: Your password is invalid!

	Input: JSGuru123
	Output: Your password is cool! 
*/

// WITH CALLBACK
var password = 'JSGuru123';


(function (pwd, success, error) {
	var numberCheck = false;
	var lengthCheck = (pwd.length >= 6);

	for (let i = 0; i < pwd.length; i++) {
		if(pwd[i]* 1 == pwd[i]) {
			numberCheck = true;
		}
	}

	if (numberCheck === true && lengthCheck === true) {
		success('Your password is cool!');
	} else {
		error('Your password is invalid!');
	}

})(password, successCallback, errorCallback);

function successCallback(message) {
	console.log('SUCCESS: ' + message);
}

function errorCallback(message) {
	console.log('ERROR: ' + message);
}

// WITHOUT CALLBACK

var password = 'JSGuru123';


var res = (function (pwd) {
	var numberCheck = false;
	var lengthCheck = (pwd.length >= 6);

	for (let i = 0; i < pwd.length; i++) {
		if(parseInt(pwd[i])) {
			numberCheck = true;
			break; // zato sto je dovoljno da mi nadje samo 1 broj, ne mora dalje da proverava; kada naidje na prvi broj - prekida i ne prolazi dalje kroz niz
		}
	}

	if( numberCheck === false || lengthCheck === false) {
		return false;
	}

	return true;

})(password);


if(res) {
	console.log('Your password is cool!');
} else {
	console.log('Your password is invalid!');
}
