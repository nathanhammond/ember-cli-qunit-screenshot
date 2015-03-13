module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    var npm = this.addPackagesToProject([
      { name: 'screenshot-server', target: '0.0.x' }
    ]);

    var bower = this.addBowerPackagesToProject([
      { name: 'screenshot-client', target: '0.0.x' }
    ]);

    return npm && bower;
  }
};
