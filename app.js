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

app.post('/', badges.save, badges.send);

app.get('/badges', badges.get);

app.listen(8000, function () {
  console.log('Server is listening on port %d', 8000);
});


