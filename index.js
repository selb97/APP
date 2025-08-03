const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello from Node.js behind Nginx!</h1>');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});