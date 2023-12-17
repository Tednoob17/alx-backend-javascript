/*
 * Small HTTP server using Express
*/

const express = require('express');
const { readFile } = require('fs');

const host = '0.0.0.0';
const port = 1245;

const app = express();
const router = express.Router();

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let len = 0;

  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            len += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        let res = `Number of students: ${len - 1}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            res += `Number of students in ${key}: ${value}. List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(res);
      }
    });
  });
}

router.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

router.get('/students', (req, res) => {
  countStudents(process.argv[2] ? process.argv[2] : '')
    .then((data) => res.send(['This is the list of our students', data].join('\n')))
    .catch(() => res.send('This is the list of our students\nCannot load the database'));
});

app.use('/', router);

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

module.exports = app;
