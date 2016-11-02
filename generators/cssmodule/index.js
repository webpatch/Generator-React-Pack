'use strict';
var yeoman = require('yeoman-generator');
module.exports = yeoman.Base.extend({

  writing: function () {
    if (this.options.tools.includes('redux')) {
      this.fs.copy(this.templatePath('src/app-redux.jsx'), this.destinationPath('src/app.jsx'));
    } else {
      this.fs.copy(this.templatePath('src/app-simple.jsx'), this.destinationPath('src/app.jsx'));
    }
    this.fs.copy(this.templatePath('src/hello.jsx'), this.destinationPath('src/hello.jsx'));
    this.fs.copy(this.templatePath('src/hello.scss'), this.destinationPath('src/hello.scss'));
  }
});
