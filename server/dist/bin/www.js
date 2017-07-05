#!/usr/bin/env node
'use strict';

var _index = require('../index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Server = _index2.default.listen(3000, function () {
  var host = Server.address().address;
  var port = Server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
});