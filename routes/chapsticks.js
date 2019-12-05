const express = require('express');
const router = express.Router();
const chapsticksCtrl = require('../controllers/chapsticks');


router.use(isLoggedIn);

router.get('/', chapsticksCtrl.index);
router.post('/', chapsticksCtrl.create);
router.get('/new', chapsticksCtrl.new);
router.get('/:id', chapsticksCtrl.show);
router.delete('/:id', chapsticksCtrl.delete);



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }


module.exports = router;