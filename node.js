// included node package
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n\nThe request headers:\n' + JSON.stringify(req.headers) 
          + '\n\nThe request\'s keys:' + JSON.stringify(Object.keys(req)));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*

JSON.stringify(req.headers)  // to explore

JSON.stringify(Object.keys(req))  // to explore

No way to access *body* of req in vanilla node?
Post request headers w/ key/value pairs show up, though.

*/