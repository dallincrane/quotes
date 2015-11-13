var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());


var users = [];

app.get('/users', function(req, res, next) {
  res.status(200).json(users);
});

app.post('/users', function(req, res, next) {
  users.push(req.body);
  res.status(200).json({ message: 'user saved' });
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
