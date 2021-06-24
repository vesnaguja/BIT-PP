function Student(studentName, studentSurname) {
  this.studentName = studentName;
  this.studentSurname = studentSurname;
}

Student.prototype.getStudentData = function () {
  return this.studentName + ' ' + this.studentSurname;
}
