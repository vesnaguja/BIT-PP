/* 9.	Write a function to hide email address.

"myemailaddress@bgit.rs" -> "mye...@bgit.rs"
*/

var email = 'myemailaddress@bgit.rs';
var result = '';
var inName = true;

for (var i = 0; i < email.length; i++) {

  if (email[i] == '@') {
    inName = false;
  }

  if(inName == true) {
    if (i < 3) {
      result += email[i];
      if (i === 2) {
        result += '...';
      }
    }
  } else {
    result += email[i];
  }
  //console.log(i, email[i], inName, result);
}

console.log(result);