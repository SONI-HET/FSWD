const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Hello World!');
  res.end();
}).listen(3001);
console.log('server listening on http://localhost:3001');