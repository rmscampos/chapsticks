const express = require('express');
const router = express.Router();
const chapsticksCtrl = require('../controllers/chapsticks');

router.get('/', chapsticksCtrl.index);
router.get('/new', chapsticksCtrl.new);
// router.get('/:id', chapsticksCtrl.show)
// router.post('/', chapsticksCtrl.create);

module.exports = router;