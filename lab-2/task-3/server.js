const http = require('http');
// document.write('<script type="text/javascript>" src="./script.js"></script>');
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 8080
