'use strict';
var yeoman = require('yeoman-generator');
module.exports = yeoman.Base.extend({

  writing: function () {
    ['src/', 'index.html'].forEach(i =>
      this.fs.copy(this.templatePath(i), this.destinationPath(i))
    );
  }
});
