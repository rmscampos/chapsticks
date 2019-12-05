const express = require('express');
const router = express.Router();
const chapsticksCtrl = require('../controllers/chapsticks');

router.get('/', chapsticksCtrl.index);
router.post('/', chapsticksCtrl.create);
router.get('/new', chapsticksCtrl.new);
router.get('/:id', chapsticksCtrl.show)

module.exports = router;