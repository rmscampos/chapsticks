const passport = require('passport');
//capitalize when a constructor function or a class
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

//the new invokes classes
//needs a configuration object 
//needs a verify function
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, function(accessToken, refreshToken, profile, cb){
//a user has logged in with OAuth
    User.findOne({googleId: profile.id}, function(err, user) {
        if (err) return cb(err);
        if (user) {
            return cb(null, user);
        } else {
            // we have a new user via OAuth!
            const newUser = new User({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id,
                avatar: profile.photos[0].value
            });
            newUser.save(function(err) {
                if (err) return cb(err);
                return cb(null, newUser);
            });
        }
    });
}));

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user)
    })
})

