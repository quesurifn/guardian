var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression')
var session = require('express-session');

var index = require('./routes/index');
var root = require('./routes/root')

var favicon = require('serve-favicon')

var app = express();


app.use(compression({level: 9}))

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(logger('dev'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use(favicon(path.join(__dirname, '../client/build/favicon.ico')))


app.use('/', express.static(path.join(__dirname, '../client/build')));
app.use('/seo/', express.static(path.join(__dirname, './public')));


app.get('/seo/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send("User-agent: * \nAllow: /");
});

app.get('/seo/sitemap.xml', (req, res) => {
  res.type('text/xml');
  res.sendFile(path.resolve(__dirname, '../client/build/sitemap.xml'))
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});


app.use('/api', index);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.error(err)
  // render the error page
  res.status(err.status || 500);
  res.send(err.message)
});

process.on('uncaughtException', function (err) {
  console.log(err);
})

module.exports = app;