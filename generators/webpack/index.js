'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  writing: function () {
    [
      'server.js',
      'webpack.dist.config.js',
      'webpack.dev.config.js'
    ].forEach(
      i => this.fs.copy(this.templatePath(i), this.destinationPath(i))
    );

    // ['webpack.dev.config.js'].forEach(i=>this.fs.copyTpl(
    //   this.templatePath(i),
    //   this.destinationPath(i),
    //   this.options
    // ));
  },
});
