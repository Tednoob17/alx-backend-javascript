/*
 * Small HTTP server using Node's HTTP module
*/

const http = require('http');
const { readFile } = require('fs');

const port = 1245;
const host = '0.0.0.0';

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

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    const text = 'Hello Holberton School!';
    res.setHeader('Content-Length', text.length);
    res.end(text);
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    const db = process.argv[2] ? process.argv[2] : '';
    countStudents(db).then((data) => {
      const string = data.slice(0, -1);
      res.end(string);
    }).catch(() => {
      res.end('Cannot load the database');
    });
  }
}).listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;
