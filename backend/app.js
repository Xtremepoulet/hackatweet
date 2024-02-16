require("./models/connection");
require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const tweetRouter = require('./routes/tweet');
const hashtagRouter = require('./routes/hashtag');


var app = express();
const cors = require('cors')

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/tweet', tweetRouter);
app.use('/hashtag', hashtagRouter);


module.exports = app;