const Chapstick = require('../models/chapstick')

module.exports = {
    index,
    show,
    new: newChapstick,
    create,
    delete: deleteChapstick,
    update
};

function update(req, res, next) {
  chapstick.findById(req.params.id, function (err, chapstick) {
    for (var i = 0; i < chapsticks.length; i++) {
      if (chapsticks[i]._id == req.body._id) {
        chapsticks[i].content = req.body.content
        break; 
      }
    }
    req.user.save(function (err) {
      if (err) return next(err)
      res.redirect(`/chapsticks`)
    });
  });
};

function deleteChapstick(req, res) {
    Chapstick.findById(req.params.id, function(err, chapstick) {
        chapstick.remove();
    });
    res.redirect('/chapsticks/');
  }
  

function index(req, res) {
    Chapstick.find({}, function(err, chapsticks) {
        res.render('chapsticks/index', { title: 'Collection', chapsticks })
    });
}

function show(req, res) {
    Chapstick.findById(req.params.id, function(err, chapstick) {
        res.render('chapsticks/show', {title: 'Details', chapstick});
    })
}

function newChapstick(req, res) {
    res.render('chapsticks/new', {title: 'Add Item'});
}

function create(req, res) {
    const chapstick = new Chapstick(req.body);
    chapstick.save(function(err) {
        if (err) return res.redirect('/chapsticks/new');
        res.redirect("/chapsticks/");
    });
}
