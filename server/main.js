const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  console.log("Request received: ", req.url);
  if (req.url.endsWith("Time"))
  {
    res.end("It's Fun time");
  }
  else
  {
      res.end("Hello from Fun World!");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});