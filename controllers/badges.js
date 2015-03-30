'use strict';

var _ = require('underscore');
var model = require('../models/badges');

/**
 * Send badges to model to be saved
 */
exports.save = function (req, res, next) {

  //preserve the copy of the body object
  var badges = _.clone(req.body);

  model.save(badges, function (err) {
    if (err) return res.status(503).json({error: true});

    // go to the next middleware
    next();

    model.trim();

  });
};

/**
 * Send badges to pub/sub socket in model
 */
exports.send = function (req, res, next) {
  var badges = _.clone(req.body);

  // send
  model.send(badges, function (err) {
    if (err) return res.status(503).json({error: true});
    res.status(200).json({ error: null });
  });

  next();

};

/**
 * Get 10 badges from model
 */
exports.get = function (req, res) {
  model.get(function (err, data) {
    if (err) return res.status(503).json({ error: true });
    res.status(200).json(data);
  });
};
