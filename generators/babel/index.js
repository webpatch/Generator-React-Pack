'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({

  writing: function () {
    var d = {
      "presets": [
        "es2015",
        "react",
        "stage-1"
      ],
      "plugins": [
        "transform-decorators-legacy"
      ]
    };

    if (this.options.needTest) {
      d = Object.assign({}, d, {
        "env": {
          "test": {
            "plugins": [
              "istanbul"
            ]
          }
        },
      })
    }

    this.fs.writeJSON(this.destinationPath('.babelrc'), d, null, '\t');
  }
});
