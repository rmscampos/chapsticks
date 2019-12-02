const express = require('express');
const router = express.Router();
const chapsticksCtrl = require('../controllers/chapsticks');

router.get('/', chapsticksCtrl.index);
router.get('/new', chapsticksCtrl.new);
router.post('/', chapsticksCtrl.create);

module.exports = router;