/*9.	
a.	Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals. 
b.	Write a function that prints out the names of persons older than 25. 
c.	Write a function that check if there is a person older than 40.
d.	Write a function that checks if all persons are older than 20.   
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const printsOlderThan25 = persons => persons.filter(person => person.age > 25).map(person => person.name)

const anyOlderThan40 = persons => persons.some(person => person.age > 40);

const isAllOlderThan20 = persons => persons.every(person => person.age > 20)

const person1 = new Person('Pera', 29);
const person2 = new Person('Mika', 41);
const person3 = new Person('Djura', 19);

const persons = [person1, person2, person3]

console.log(printsOlderThan25(persons));
console.log(anyOlderThan40(persons));
console.log(isAllOlderThan20(persons));