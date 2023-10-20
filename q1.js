const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the "hello" response
  res.end('hello\n');
});

// Listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
