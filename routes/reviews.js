var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.post('/:id', reviewsCtrl.create);
router.delete('/reviews/:id', reviewsCtrl.delete);

module.exports = router;