var http = require('http');
var spawn = require('child_process').spawn;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = 3000;

http.createServer(function(req, res) {
  if (req.method === 'POST' && req.url === '/update') {
    gitPull();
  }

  res.end();
}).listen(port);

console.log('update-service listening on port ' + port, ' Environment: ', process.env.NODE_ENV);

function gitPull() {
  var git = spawn('git', ['pull', 'origin', 'master']);

  git.stdout.on('data', function (data) {
    console.log('git stdout: ' + data);
  });

  git.stderr.on('data', function (data) {
    console.log('git stderr: ' + data);
  });

  git.on('exit', function (code) {
    console.log('git pull. child process exited with code ' + code);
    npmInstall();
  });
};

function npmInstall() {
  var forever = spawn('npm', ['install', '--production']);

  forever.stdout.on('data', function (data) {
    console.log('npm install stdout: ' + data);
  });

  forever.stderr.on('data', function (data) {
    console.log('npm install stderr: ' + data);
  });

  forever.on('exit', function (code) {
    console.log('npm install. child process exited with code ' + code);
    restartServer();
  });
};

function restartServer() {
  var forever = spawn('forever', ['restart', 'server.js']);

  forever.stdout.on('data', function (data) {
    console.log('forever restart. stdout: ' + data);
  });

  forever.stderr.on('data', function (data) {
    console.log('forever restart. stderr: ' + data);
    if (/Cannot find forever process/.test(data)) {
      startServer();
    }
  });

  forever.on('exit', function (code) {
    console.log('forever restart. child process exited with code ' + code);
  });
};

function startServer() {
  var forever = spawn('forever', ['start', 'server.js'], {env: process.env});

  forever.stdout.on('data', function (data) {
    console.log('forever start. stdout: ' + data);
  });

  forever.stderr.on('data', function (data) {
    console.log('forever start. stderr: ' + data);
  });

  forever.on('exit', function (code) {
    console.log('forever start. child process exited with code ' + code);
  });
};
