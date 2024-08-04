class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}

const student1 = new Student("Carlinhos", 10);
const student2 = new Student("Dalva", 6);
const student3 = new Student("Cavalo", 5);

const array = [student1, student2, student3];

function getApprovedStudents(student) {
  return student.grade >= 6;
}

const approvedStudents = array.filter(getApprovedStudents);

console.log(approvedStudents);
