'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _express2.default.Router();
var App = new _express2.default();

// Setup routes for Front
App.use(_express2.default.static(_path2.default.join(__dirname, '../../public/')));
App.get('/', function (req, res) {
  res.sendFile(_path2.default.join(__dirname + '/../../public/index.html'));
});

// Setup subdomain for API
App.get('/api', function (req, res) {
  res.json({ api: 'Node API with Subdomain Setup' });
});

exports.default = App;