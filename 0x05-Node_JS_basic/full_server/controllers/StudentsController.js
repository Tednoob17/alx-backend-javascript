/*
 * Students Controller
 */
import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(_, res) {
    console.log(process.argv[2].toString());
    readDatabase(process.argv[2].toString())
      .then((response) => {
        const data = [];
        const keys = Object.keys(response);
        data.push('This is the list of our students');
        keys.sort();
        for (let i = 0; i < keys.length; i += 1) {
          data.push(`Number of students in ${keys[i]}: ${response[keys[i]].length}. List: ${response[keys[i]].join(', ')}`);
        }
        res.status(200).send(data.join('\n'));
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    readDatabase(process.argv[2].toString())
      .then((response) => {
        if (!(major in response)) {
          res.status(500).send('Major parameter must be CS or SWE');
        } else {
          res.status(200).send(`List: ${response[major].join(', ')}`);
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
