var Chapstick = require('../models/chapstick');

module.exports = {
  create
};

function create(req, res) {
  Chapstick.findById(req.params.id, function(err, chapstick) {
      console.log('this is chapstick', chapstick);
          chapstick.review.push(req.body);
        chapstick.save(function(err) {
          res.redirect(`/chapsticks/${chapstick._id}`);
        }); 
  });
}