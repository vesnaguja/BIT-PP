/*3.	Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.*/


function createProject(ds, pl, gr, inDev ) {
  var project = {
    description: ds,
    programmingLanguage: pl,
    gitRepository: gr,
    inDevelopment: inDev,
    printGitRepository: function () {
      console.log(project.gitRepository);
    },
    isInJS: function () {
      if (pl === 'JavaScript') {
        console.log('Project is written in JavaScript');
      } else {
        console.log('Project is not written in JavaScript');
      }
    },
    isInDevelopment: function () {
      if(inDev === true){
        console.log('Project is in development');
      } else {
        console.log('Project is not in development');
      }
    }
  }
  return project;
}

var web = createProject('BIT project', 'JavaScript', 'https://github.com/vesnaguja/Web', true);
//console.log(web);

var pp = createProject('BIT project', 'PHP', 'https://github.com/vesnaguja/PP', false);

//pp.printGitRepository();

// web.isInJS();
// pp.isInJS();
web.isInDevelopment();
pp.isInDevelopment();