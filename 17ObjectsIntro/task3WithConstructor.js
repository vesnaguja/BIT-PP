/*3.	Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not.

Add a method that prints out the project's repository, 
a method that checks if the project is written in JavaScript 
as well as a method that checks if the project is in development or not.*/


function Project(d, pl, gr, inD) {
  this.description = d;
  this.programmingLanguage = pl;
  this.gitRepository = gr;
  this.inDevelopment = inD;

  this.printRepository = function () {
    console.log(this.gitRepository);
  }

  this.isInJS = function () {
    return this.programmingLanguage === 'JavaScript';
  }

  this.isInDevelopment = function () {
    if (this.inDevelopment === true) {
      console.log('Project is in development.');
    } else {
      console.log('Project is not in development.');
    }
  }
}

var web = new Project('BIT project', 'HTML and CSS', 'https://github.com/vesnaguja/Web', true);
var pp = new Project('BIT project', 'JavaScript', 'https://github.com/vesnaguja/PP', false);

console.log(web);
console.log(pp);

console.log('-------------------------------------');

web.printRepository();
pp.printRepository();

console.log('-------------------------------------');

console.log(web.isInJS());
console.log(pp.isInJS());

console.log('-------------------------------------');

web.isInDevelopment();
pp.isInDevelopment();