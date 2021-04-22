/*1.	Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
●	takes 4 arguments: number of children, partner's name, geographic location, job title.
●	outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments
*/

function tellFortune(numOfChildren, partner, geographicLocation, jobTitle) {
  var future = 'You will be a ' + jobTitle + ' in ' + geographicLocation + ', and married to ' + partner + ' with ' + numOfChildren + ' kids.';

  return future;
}

var numOfChildren = [4, 2, 3];
var partner = ['Milos', 'Milos', 'Milos'];
var geographicLocation = ['Beograd', 'Berlin', 'Bec'];
var jobTitle = ['developer', 'designer', 'manager'];


for (let i = 0; i < numOfChildren.length; i++) {
  console.log(tellFortune(numOfChildren[i], partner[i], geographicLocation[i], jobTitle[i]));
}

// console.log(
//   tellFortune(
//     numOfChildren[Math.floor(Math.random() * numOfChildren.length)],
//     partner[Math.floor(Math.random() * partner.length)],
//     geographicLocation[Math.floor(Math.random() * geographicLocation.length)],
//     jobTitle[Math.floor(Math.random() * jobTitle.length)]
//   )
// );