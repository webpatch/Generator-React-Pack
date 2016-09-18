'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('.babelrc.ejs'),
      this.destinationPath('.babelrc'),
      this.options
    );
  }
});
