function Student(studentName, studentSurname) {
  this.studentName = studentName;
  this.studentSurname = studentSurname;
}

Student.prototype.getStudentData = function () {
  //return this.studentName[0].toUpperCase() + this.studentName.substring(1) + ' ' + this.studentSurname[0].toUpperCase() + this.studentSurname.slice(1, this.studentSurname.length);
  return this.studentName + ' ' + this.studentSurname;
}

// var student1 = new Student('vesan', 'vesic');
//  console.log(student1.getStudentData()); 