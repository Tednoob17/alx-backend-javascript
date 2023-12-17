/*
 * Utils functions for the project
*/
import fs from 'fs';

export default function readDatabase(fileName) {
  const fields = {};

  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        const noHeader = lines.slice(1);
        for (let i = 0; i < noHeader.length; i += 1) {
          if (noHeader[i]) {
            const field = noHeader[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]].push(field[0]);
            } else {
              fields[field[3]] = [field[0]];
            }
          }
        }
        resolve(fields);
      }
    });
  });
}
