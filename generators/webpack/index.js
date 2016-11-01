'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  writing: function () {
    this.fs.copy(this.templatePath('server.js'), this.destinationPath('server.js'));
    this.fs.copyTpl(this.templatePath('webpack.dist.config.js.ejs'), this.destinationPath('webpack.dist.config.js'), this.options);
    this.fs.copyTpl(this.templatePath('webpack.dev.config.js.ejs'), this.destinationPath('webpack.dev.config.js'), this.options);
  },
});
