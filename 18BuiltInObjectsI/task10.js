// 10.
// a.	Write a constructor function that creates points in space. Each point in space has its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.

function createsPoints() {
  return Array.from({
    length: 3
  }, () => Math.floor(Math.random() * 10));
}

var point1 = createsPoints();
var point2 = createsPoints();

console.log(point1, point2);

// b.	Write a function that calculates the distance between two points in the space. 

function calculatesDistance(p1, p2) {
  var distance = Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2) + Math.pow(p1[2] - p2[2], 2));
  return Math.round(distance);
}

console.log(calculatesDistance(point1, point2));