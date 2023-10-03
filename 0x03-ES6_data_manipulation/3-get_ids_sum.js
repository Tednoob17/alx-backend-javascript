export default function getStudentIdsSum(students) {
  return students.reduce((acc, curVal) => acc + curVal.id, 0);
}
