/* const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello from Node.js behind Nginx!</h1>');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
}); | */


const express = require('express');
const path = require('path');

const PORT = 3000;
const IP_ADDR = '0.0.0.0';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, IP_ADDR, () => {
  console.log('Server is running on port 3000')
});
