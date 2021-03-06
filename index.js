'use strict';

var path = require('path');
var fs   = require('fs');

module.exports = {
  name: 'Ember CLI QUnit Screenshot',

  init: function() {},

  included: function included(app) {
    this._super.included(app);

    if (app.tests) {
      app.import(app.bowerDirectory + '/screenshot-client/screenshot-client.js', {
        type: 'test'
      });
    }
  },

  contentFor: function(type) {
    var allowed = ["test-body-footer", "test-head-footer"];
    if (~allowed.indexOf(type)) {
      return this._readTemplate(type);
    }
  },

  _readTemplate: function(name) {
    return fs.readFileSync(path.join(__dirname, 'templates', name + '.html'));
  }

};
