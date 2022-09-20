// Possui vávias dependencias do projeto.

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Importa o Express.
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// Qual engine ele vai utilizar que no caso é o ejs.
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Pasta publica de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rotas do servidor
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Cria rotas em caso de acessos inválidos.

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

// Exportação da aplicação.
module.exports = app;
