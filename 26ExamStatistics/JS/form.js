var addButton = document.querySelector('#add');
var selectSubject = document.querySelector('#subject');
var inputStudent = document.querySelector('#student');
var inputGrade = document.querySelector('#grade');
var errorMessage = document.querySelector('#error-message');

var passedDiv = document.querySelector('#passed');
var failedDiv = document.querySelector('#failed');

var totalStudentsElement = document.querySelector('#total-students');
var blueDivElement = document.querySelector('#passed-output')
var redDivElement = document.querySelector('#failed-output')

var numberOfPassedStudents = document.querySelector('#passed-number');
var numberOfFailedStudents = document.querySelector('#failed-number');

var studentsFailedPercentage = document.querySelector('#failed-percentage');

var examList = [];


function startWithCapital(word) {
  return word[0] === word[0].toUpperCase();
}


function handleInput() {
  // collect data
  var subjectValue = selectSubject.value;
  var studentValue = inputStudent.value;
  var gradeValue = inputGrade.value;

  // brisanje input polja
  selectSubject.value = '';
  inputStudent.value = '';
  inputGrade.value = '';

  // reset error message to ''
  errorMessage.textContent = '';

  // Array Destructuring 
  var [fname, lname] = studentValue.split(' ');

  var student = new Student(fname, lname);
  var subject = new Subject(subjectValue);

  var exam = new Exam(subject, student, gradeValue);

  // validacija
  if (subjectValue === '') {
    errorMessage.textContent = 'Select the subject.'
    return;
  }
  if (!studentValue) {
    errorMessage.textContent = 'Enter name and surname of a student.'
    return;
  }
  if (gradeValue > 10 || gradeValue < 1) {
    errorMessage.textContent = 'A grade should be numerical value from 1 to 10.'
    return;
  }

  if (!startWithCapital(fname) || !startWithCapital(lname)) {
    errorMessage.textContent = 'Name and surname of a student should start with capitals.'
    return;
  }

  // provera da li uneti predmet/student (exam) vec postoji
  var examsWithSameInfo = examList.find(function (el) {
    return exam.getExamInfo() === el.getExamInfo()
  });

  if (examsWithSameInfo) {
    errorMessage.textContent = 'Student has grade for that subject.';
    return;
  }

  // dodaj exam u listu
  examList.push(exam);


  addExamToBottomList(exam);
  updateStats();
}

function addExamToBottomList(exam) {
  var subjectAndStudentParagraph = document.createElement('p');
  subjectAndStudentParagraph.textContent = exam.getExamInfo();
  var gradeParagraph = document.createElement('p');
  gradeParagraph.textContent = exam.grade;

  var examContainer = document.createElement('div');
  examContainer.classList.add('flex')
  examContainer.appendChild(subjectAndStudentParagraph);
  examContainer.appendChild(gradeParagraph);


  // hak za bg-color even i odd
  var passedCount = examList.filter(function (e) {
    return e.hasPassed();
  }).length;

  var failedCount = examList.filter(function (e) {
    return !e.hasPassed();
  }).length; // failedCount = examList.length - passedCount

  if (exam.hasPassed()) {
    // ubaci ga u passed listu
    gradeParagraph.classList.add('blue');
    examContainer.classList.add((passedCount % 2 === 0) ? 'odd' : 'even');
    passedDiv.appendChild(examContainer);
  } else {
    // ubaci ga u failed listu
    gradeParagraph.classList.add('red');
    examContainer.classList.add((failedCount % 2 === 0) ? 'odd' : 'even');
    failedDiv.appendChild(examContainer);
  }
}

function updateStats() {
  totalStudentsElement.textContent = examList.length;
  numberOfPassedStudents.innerText = examList.filter(e => e.hasPassed()).length;

  var failedStudentCount = examList.filter(function (el) {
    return !el.hasPassed();
  }).length;

  numberOfFailedStudents.innerText = failedStudentCount;
  studentsFailedPercentage.innerHTML = (failedStudentCount * 100 / examList.length).toFixed();
}


addButton.addEventListener('click', handleInput);