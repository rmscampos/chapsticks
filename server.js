var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// session middleware
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');

// load the env vars
require('dotenv').config();

// create the Express app
var app = express();

// connect to the MongoDB with mongoose
require('./config/database');
// configure Passport
require('./config/passport');

// require our routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var chapsticksRouter = require('./routes/chapsticks');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// mount the session middleware
app.use(session({
  secret: 'SEI Rocks!',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));


// mount all routes with appropriate base paths
app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/chapsticks', chapsticksRouter);

// invalid request, send 404 page
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
