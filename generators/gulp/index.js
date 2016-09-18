'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  writing: function () {
    this.fs.copy(
      this.templatePath('gulpfile.babel.js'),
      this.destinationPath('gulpfile.babel.js')
    );
  }
});
