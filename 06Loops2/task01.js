// 1.	Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no


var e = 3;
var a = [5, -4.2, 3, 7];
var result = 'no';

for (var i = 0; i < a.length; i++) {

  if (e === a[i]) {
    result = 'yes';
  }
}

console.log(result);


// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no


var e = 3;
var a = [5, -4.2, 18, 7];
var result = 'no';

for (i = 0; i < a.length; i++) {

  if (e === a[i]) {
    result = 'yes';
  }
}

console.log(result);
