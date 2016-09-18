'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  writing: function () {
    ['.gitlab-ci.yml', 'test/'].forEach(i => this.fs.copy(
      this.templatePath(i),
      this.destinationPath(i)
    ));

    this.fs.copyTpl(
      this.templatePath('karma.conf.js.ejs'),
      this.destinationPath('karma.conf.js'),
      this.options
    );
  }
});
