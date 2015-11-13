var express = require('express');
var bodyParser = require('body-parser');

// Controller
var UsersCtrl = require('./controllers/UsersCtrl');

var app = express();

app.use(bodyParser.json());

app.get('/users', UsersCtrl.log, UsersCtrl.index);

app.get('/users/:id', UsersCtrl.show);

app.post('/users', UsersCtrl.log, UsersCtrl.build);

app.listen(3000, function() {
  console.log('listening on port 3000');
});
