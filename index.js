'use strict';

var path = require('path');
var fs   = require('fs');

module.exports = {
  name: 'Ember CLI QUnit Screenshot',

  init: function() {},

  contentFor: function(type) {
    var allowed = ["test-body", "test-head-footer"];
    if (~allowed.indexOf(type)) {
      return this._readTemplate(type);
    }
  },

  _readTemplate: function(name) {
    return fs.readFileSync(path.join(__dirname, 'templates', name + '.html'));
  }

};
