/*
 * Small HTTP server using Node's HTTP module
*/

const http = require('http');

const port = 1245;
const host = '0.0.0.0';
const app = http.createServer();

app.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', '27');
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

module.exports = app;
