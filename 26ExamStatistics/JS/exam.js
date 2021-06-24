function Exam(subject, student, grade) {  
  this.subject = subject;
  this.student = student;
  this.grade = grade;
}

Exam.prototype.getExamInfo = function () {
  return this.getSubjectname + ', ' + this.getStudentData;
}

Exam.prototype.hasPassed = function () {
  if(this.grade > 5) {
    return 'The student has passed the exame.'
  } else {
    return 'The student has not passed the exame.'
  }
}