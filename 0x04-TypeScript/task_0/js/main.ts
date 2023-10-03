interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
};

const student1: Student = {
    firstName: "Hamidou",
    lastName: "Tessilimi",
    age: 23,
    location: "Cotonou"
};

const student2: Student = {
    firstName: "Ismael",
    lastName: "Tessilimi",
    age: 28,
    location: "Paris"
};

const studentsList: Student[] = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const table_head: HTMLTableSectionElement = document.createElement("thead");
const table_body: HTMLTableSectionElement = document.createElement("tbody");
const row: HTMLTableRowElement = table_head.insertRow(0);
const cell1: HTMLTableCellElement = row.insertCell(0);
const cell2: HTMLTableCellElement = row.insertCell(1);

cell1.innerHTML = "firstName";
cell2.innerHTML = "location";
table.append(table_head);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = table_body.insertRow(0);
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);

  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

table.append(table_body);
body.append(table);
