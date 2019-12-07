var createError = require('http-errors');
var express = require('express');
// Mo: var path = require('path');
var cookieParser = require('cookie-parser');
//var logger = require('morgan');
// Mo add:
const morganDebug = require('morgan-debug')
const helmet = require('helmet');

var indexRouter = require('./routes/index');

const data = require("./data");
// MO: var usersRouter = require('./routes/users');

var app = express();

// Mo
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(helmet());
app.use(morganDebug("myapp:server", "dev"));
app.locals.data = data;
//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Mo: app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// Mo: app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // Mo: res.locals.message = err.message;
  // Mo: res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // Mo: res.status(err.status || 500);
  // Mo: res.render('error');
  
  next(createError(500, err));
});

module.exports = app;
