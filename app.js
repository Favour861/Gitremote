var http = require('http');
var dt = require('./myfirstmodule');

var PORT = 7070;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(PORT);
// 0
// 0
