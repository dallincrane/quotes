var User = require('../models/User');

module.exports = {

  log: function(req, res, next) {
    if(req.body.pass || req.query.pass) {
      next();
    } else {
      res.status(400).json({ message: 'invalid' });
    }
  },

  index: function(req, res, next) {
    res.status(200).json(User);
  },

  show: function(req, res, next) {
    var requestedUser = User[req.params.position];
    res.status(200).json(requestedUser);
  },

  build: function(req, res, next) {
    User.push(req.body);
    res.status(200).json({ message: 'user saved' });
  }

};

// won't pass
// {
//   "name": "Morty Smith",
//   "gun": "not applicable"
// }
//
// // will pass
// {
//   "pass": true,
//   "name": "Morty Smith",
//   "gun": "not applicable"
// }
