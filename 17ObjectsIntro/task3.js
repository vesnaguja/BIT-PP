/*3.	Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.*/



function createProject(desc = 'no description', progLang = 'no programming language', gitRep = 'no git repository', inDev = false) {

  var project = {
    description: desc,
    programmingLanguage: progLang,
    gitRepository: gitRep,
    inDevelopment: inDev,
    printRepository: function () {
      console.log(this.gitRepository);
    },
    isJavaScript: function () {
      if (this.programmingLanguage === 'JavaScript' || this.programmingLanguage === 'JS') {
        return true;
      }
      return false;
    },
    isInDevelopment: function () {
      return this.inDevelopment;
    }
  };

  // project.printRepository = function() {
  //   console.log(this.gitRepository);
  // }

  return project;

}

var project1 = createProject('opis1', 'JavaScript', 'http://git.vrh.com', true);
//var project2 = createProject('opis2', 'C', 'http://git.aegaegaegarg.com', false);

project1.printRepository();

// provera isJavaScript
if (project1.isJavaScript()) {
  console.log('projekat je u JS-u');
} else {
  console.log('projekat nije u JS-u');
}

// provera isInDevelopment
if (project1.isInDevelopment()) {
  console.log('projekat je u dev fazi');
} else {
  console.log('projekat nije u dev fazi');
}