var Chapstick = require('../models/chapstick');

module.exports = {
  create,
//   delete: deleteReview
};


// function deleteReview(req, res) {
//     Chapstick.findById(req.params.id, function(err, chapstick) {
//             chapstick.review.(req.body);
//           chapstick.save(function(err) {
//             res.redirect(`/chapsticks/${chapstick._id}`);
//           }); 
//     });
//   }

function create(req, res) {
  Chapstick.findById(req.params.id, function(err, chapstick) {
          chapstick.review.push(req.body);
        chapstick.save(function(err) {
          res.redirect(`/chapsticks/${chapstick._id}`);
        }); 
  });
}

