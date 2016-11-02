'use strict';
var yeoman = require('yeoman-generator');
module.exports = yeoman.Base.extend({

  writing: function () {
    ['src/'].forEach(i =>
      this.fs.copy(this.templatePath(i), this.destinationPath(i))
    );
  }
});
