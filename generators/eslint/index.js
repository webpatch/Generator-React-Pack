'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  writing: function () {
    this.fs.copyTpl(
      this.templatePath('.eslintrc.js'),
      this.destinationPath('.eslintrc.js'),
      this.options
    );
  }
});
