'use strict';

var
  axon = require('axon'),
  socket = axon.socket('pub');

socket.bind(8001);

/**
 * Send a badge to the publish socket
 * @param badge
 */
//exports.send = socket.send;
exports.send = function (badge) {
  socket.send(badge);
};
