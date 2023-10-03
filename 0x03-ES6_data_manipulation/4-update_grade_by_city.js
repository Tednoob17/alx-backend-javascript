/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      for (const g of newGrades) if (g.studentId === student.id) student.grade = g.grade;
      if (student.grade === undefined) student.grade = 'N/A';
      return student;
    });
}
