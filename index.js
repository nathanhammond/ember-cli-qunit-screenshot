'use strict';

var path = require('path');
var fs   = require('fs');

module.exports = {
  name: 'Ember CLI QUnit Screenshot',

  init: function() {},

  contentFor: function(type) {
    if (type === 'test-body') {
      return this._readTemplate('test-body');
    }
  },

  _readTemplate: function(name) {
    return fs.readFileSync(path.join(__dirname, 'templates', name + '.html'));
  }

};
