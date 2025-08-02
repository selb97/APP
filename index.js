const http = require('http'); // Import the built-in HTTP module

const hostname = '0.0.0.0'; // Localhost
const port = 3000; // Port to listen on

// Create a server
const server = http.createServer((req, res) => {
  // Set the HTTP header for a successful response and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the "Hello World!" message as the response body
  res.end('Hello World!\n');
});

// Start the server and listen for incoming requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});