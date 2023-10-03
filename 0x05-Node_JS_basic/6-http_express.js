/*
 * Small HTTP server using Express
*/

const express = require('express');

const host = '0.0.0.0';
const port = 1245;

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.use('/', router);

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

module.exports = app;
