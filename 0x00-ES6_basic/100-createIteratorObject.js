export default function createIteratorObject(report) {
  const res = [];
  for (const i of Object.values(report.allEmployees)) res.push(...i);
  return res;
}
