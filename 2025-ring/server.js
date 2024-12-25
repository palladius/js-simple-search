const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/iframe') {
    // Read the contents of the iframe HTML file
    fs.readFile('iframe.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading iframe.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }  else if (req.url === '/VERSION') {
    // Serve the VERSION file
    fs.readFile('VERSION', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading VERSION');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
    });
  } else if (req.url === '/') {  // Handle requests for the root URL
    // Serve the main index.html for other requests
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading index.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
        // Handle any other unmatched requests (e.g., 404 Not Found)
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
