(function() {
  'use strict';

  var
    express = require('express'),
    bodyParser = require('body-parser');

  // init our app
  var app = express();

  // declare a middleware
  app.use(bodyParser.json());

  app.post('/', function(req, res) {
    res.send('Hello world!\n');
  });

  app.listen(8000);


})();
