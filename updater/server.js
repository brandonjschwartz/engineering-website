var http = require('http');
var spawn = require('child_process').spawn;

http.createServer(function(req, res) {
  if (req.method === 'POST' && req.url === '/update') {
    console.log('git pull');

    var git = spawn('git', ['pull', 'origin', 'master']);

    git.stdout.on('data', function (data) {
      console.log('git stdout: ' + data);
    });

    git.stderr.on('data', function (data) {
      console.log('git stderr: ' + data);
    });

    git.on('exit', function (code) {
      console.log('git child process exited with code ' + code);
      restartDocpad();
    });
  }
  
  res.end();
}).listen(3000);

console.log('listening on http://localhost:3000');


function restartDocpad() {
  var forever = spawn('forever', ['restart', '0']);

  forever.stdout.on('data', function (data) {
    console.log('forever stdout: ' + data);
  });

  forever.stderr.on('data', function (data) {
    console.log('forever stderr: ' + data);
  });

  forever.on('exit', function (code) {
    console.log('forever child process exited with code ' + code);
    forever = spawn('forever', ['restart', '0']);

  });
};
