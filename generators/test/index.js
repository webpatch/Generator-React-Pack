'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  writing: function () {
    ['test/'].forEach(i => this.fs.copy(
      this.templatePath(i),
      this.destinationPath(i)
    ));

    this.fs.copyTpl(
      this.templatePath('karma.conf.js.ejs'),
      this.destinationPath('dev/karma.conf.js'),
      this.options
    );
  }
});
