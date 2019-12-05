var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.post('/:id', reviewsCtrl.create);

module.exports = router;