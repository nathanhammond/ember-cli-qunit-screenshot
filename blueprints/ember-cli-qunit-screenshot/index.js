module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    var npm = this.addPackagesToProject([
      { name: 'screenshot-server' }
    ]);

    var bower = this.addBowerPackagesToProject([
      { name: 'screenshot-client' }
    ]);

    return npm && bower;
  }
};
