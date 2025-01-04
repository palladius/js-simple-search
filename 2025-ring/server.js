const http = require('http');
const fs = require('fs');
const path = require('path'); // Import the path module

const hostname = '127.0.0.1';
const port = 8080; // was 3'000

// min rating
const envMinRating = parseFloat(process.env.MIN_RATING);

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

        // 3. / (index)
  } else if (req.url === '/') {  // Handle requests for the root URL
    // Serve the main index.html for other requests
    fs.readFile('index.html', 'utf-8',  (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading index.html');
      } else {
        const updatedHtml = data.replace(/{{envMinRating}}/g, envMinRating);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        // Server side se vuoi: res.end(data + ` envMinRating - ${envMinRating}` );
        res.end(updatedHtml);

      }
    });

    // 4. GENERIC
  } else {
    // Construct the file path
    const filePath = path.join(__dirname, req.url);

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        // File not found, handle the error (e.g., 404 Not Found)
        res.writeHead(404);
        res.end('Not Found');
      } else {
        // File exists, serve it
        fs.readFile(filePath, (err, data) => {
          if (err) {
            res.writeHead(500);
            res.end('Error reading file');
          } else {
            // Determine the content type based on the file extension
            const extname = path.extname(filePath);
            let contentType = 'text/plain'; // Default content type
            if (extname === '.html') {
              contentType = 'text/html';
            } else if (extname === '.js') {
              contentType = 'application/javascript';
            } else if (extname === '.css') {
              contentType = 'text/css';
            }
            // ... add more content types as needed ...

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
          }
        });
      }
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
