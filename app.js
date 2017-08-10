import express from 'express'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import compression from 'compression'
import request from 'request'
import helemt from 'helmet'
import crypto from 'crypto'
import Raven from 'raven' 

Raven.config('https://c43292df94e74107ad0dcd5d0340a3bf:dc9b141ff009446687c737df9531f0c2@sentry.io/184060').install();

require('dotenv').config()
 
const app = express();

app.use(helmet({
  frameguard: false
}))

app.use(compression({level: 9}))

import index from './routes/index'




// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/search', express.static(__dirname + '/public'));



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', index);

// error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
 // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};

   console.log(err)
 // render the error page
   res.status(err.status || 500);
   res.render('404Canvas');
  });

module.exports = app;