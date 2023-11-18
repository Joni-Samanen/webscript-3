var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// config mongoose //
let mongoose = require('mongoose');
let DB = require('./db');


// point mongoose to the DB URI

mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

let mongDB = mongoose.connection;
mongDB.on('error', console.error.bind(console, 'Connection Error:'));
mongDB.once('open', ()=>{
  console.log('Connected to MongoDB');
})


var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var budgetRouter = require('../routes/budget');

var app = express();

app.use(express.static(path.join(__dirname, '../../assets')));
app.use(express.static(path.join(__dirname, '../../css')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
  app.use('/budget', budgetRouter);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
