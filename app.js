'use strict';

// define the main modules
var
  express = require('express'),
  bodyParser = require('body-parser'),
  badges = require('./controllers/badges');

// init our app
var app = express();

// declare a middleware
app.use(bodyParser.json());

app.post('/', badges.save, badges.send, function (req, res) {
  res.send('\nDone\n\n');
  res.render('dashboard');
});

app.listen(8000);


