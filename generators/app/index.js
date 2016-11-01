'use strict';
var yeoman = require('yeoman-generator');
var pack = require('./package.json');

module.exports = yeoman.Base.extend({
  default: function () {
    const compose = n => this.composeWith(`react-pack:${n}`, { options: this.props });
    ['webpack', 'react', 'lint', 'babel'].forEach(i => compose(i));
    if (this.props.needTest) {
      compose('test');
    }

  },
  prompting: function () {
    this.log('Welcome to use React/Webpack generator v0.2.0');
    var prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Project name',
        default: this.appname
      },
      {
        type: 'confirm',
        name: 'needIE8',
        message: 'Is need IE8 compatibility?',
        default: true
      },
      {
        type: 'list',
        name: 'js',
        message: 'Choose language',
        choices: [
          { name: 'Raw JS', value: 'raw' },
          { name: 'Typescript', value: 'ts' },
          { name: 'JS+Flow', value: 'flow' }
        ]
      },
      {
        type: 'list',
        name: 'css',
        message: 'Choose CSS language',
        choices: [
          { name: 'SCSS', value: 'scss' },
          { name: 'Raw CSS', value: 'raw' }
        ]
      },
      {
        type: 'confirm',
        name: 'needTest',
        message: 'Is need unit testing ?',
        default: false
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  },
  writing: function () {
    const user = { userName: this.user.git.name() || '', email: this.user.git.email() || '' };
    const d = Object.assign({}, this.props, user);
    this.fs.write(this.destinationPath('package.json'), pack.getPackageJSON(d));
    this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'))
  },
  install: function () {
    // this.spawnCommand('cnpm', ['install']);
  }
});
