'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  default: function () {
    const compose = n => this.composeWith(`dzbot:${n}`, { options: this.props });
    ['webpack', 'react', 'eslint', 'babel', 'gulp'].forEach(i => compose(i));
    if (this.props.needTest) {
      compose('test');
    }
  },
  prompting: function () {
    this.log('欢迎使用React/Webpack生成器');
    var prompts = [{
      type: 'input',
      name: 'name',
      message: '项目名',
      default: this.appname
    }, {
      type: 'list',
      name: 'js',
      message: '选择JS语言',
      choices: [
        { name: 'JS + Flow', value: 'flow' },
        { name: 'Typescript', value: 'ts' },
        { name: 'Raw JS', value: 'raw' }
      ]
    }, {
      type: 'list',
      name: 'css',
      message: '选择CSS语言',
      choices: [
        { name: 'SCSS', value: 'scss' },
        { name: 'Stylus', value: 'styl' },
        { name: 'Raw CSS', value: 'raw' }
      ]
    }, {
      type: 'confirm',
      name: 'needTest',
      message: '需要添加测试吗?',
      default: false
    }];

    return this.prompt(prompts).then(props => {
      this.props = props;
      console.log(this.props);
    });
  },
  writing: function () {
    const user = { name: this.user.git.name() || '', email: this.user.git.email() || '' };
    this.fs.copyTpl(
      this.templatePath('package.json.ejs'),
      this.destinationPath('package.json'),
      Object.assign({}, { props: this.props }, { user })
    );
  }
});
