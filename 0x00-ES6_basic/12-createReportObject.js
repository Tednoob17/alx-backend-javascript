export default function createReportObject(employeesList) {
  const object = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      let nb = 0;
      for (const key in employeesList) if (employeesList[key]) nb += 1;
      return (nb);
    },
  };

  return object;
}
