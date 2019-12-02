const Chapstick = require('../models/chapstick')

module.exports = {
    index,
    show,
    addItem,
    delItem
};

function index(req, res) {
    Chapstick.find({}, function(err, movies) {
        res.render('chapsticks/index', { title: 'Collection', chapsticks })
    });
}

// function show(req, res) {

// }

// function addItem(req, res, next) {
//     req.
// }