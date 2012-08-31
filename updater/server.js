http = require('http');

http.createServer(function(req, res) {
  if (req.method === 'POST') {
    console.log('post!');
  }
  
  res.end();
}).listen(3000);

console.log('listening on http://localhost:3000');
