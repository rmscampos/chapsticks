const User = require('../models/user');
const Chapstick = require('../models/chapstick')


module.exports = {
    index
};


function index(req, res, next) {
      res.render('users/index', {
        user: req.user,
        name: req.query.name,
      });
    };
  