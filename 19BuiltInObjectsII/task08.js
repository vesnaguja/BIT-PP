// 8.	Write a function to hide email addresses to protect them from unauthorized users.

// 	"somerandomaddress@example.com" -> "somerand...@example.com" //prvih 8 karaktera

var emailAddress = 'somerandomaddress@example.com';

function hideEmail(email) {
  var firstPart = email.substr(0, 8) + '...';
  var secondPart = email.substr(email.indexOf('@'));
  return firstPart + secondPart;
}


console.log(hideEmail(emailAddress));