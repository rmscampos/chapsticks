const Chapstick = require('../models/chapstick')

module.exports = {
    index,
    show,
    new: newChapstick,
    create,
    delete: deleteChapstick,
    update
};

function update(req, res, next){
    console.log('CONNECTED TO UPDATE')
    Chapstick.findOneAndUpdate(req.params.id, req.body, {new:true}, function(err, chapstick) {
        console.log(req.params.id, req.body)
        chapstick.save(function(err){
            if(err)return next(err);
            res.redirect('/chapsticks/show');
        })      
    })
}


   

function deleteChapstick(req, res) {
    Chapstick.findById(req.params.id, function(err, chapstick) {
        chapstick.remove();
    });
    res.redirect('/chapsticks/');
  }
  

function index(req, res) {
    Chapstick.find({}, function(err, chapsticks) {
        //put sort here
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
    console.log(req.body);
    req.body.userId = req.user._id.toString()
    const chapstick = new Chapstick(req.body);
    chapstick.save(function(err) {
        
        if (err) return res.redirect('/chapsticks/');
        res.redirect("/chapsticks/");
    });
}
