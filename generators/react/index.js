'use strict';
var yeoman = require('yeoman-generator');
module.exports = yeoman.Base.extend({

  writing: function () {
    const copy = (a, b = a) => {
      this.fs.copy(this.templatePath(a), this.destinationPath(b));
    };

    const copyTpl = (o, a, b = a) => {
      this.fs.copyTpl(this.templatePath(a), this.destinationPath(b), o);
    };

    console.log(this.options);

    const tools = this.options.tools;
    const isRedux = tools.includes('redux');
    const isCSSModule = tools.includes('cssmodule');
    const isRouter = tools.includes('router');

    const o = { isCSSModule, isRedux, isRouter };

    copy('src/css');
    copy('index.html');

    if (isRedux) {
      copy('src/model/action.js');
      copy('src/model/action-types.js');
      copyTpl(o, 'src/model/reducer.js.ejs', 'src/model/reducer.js');
    }

    copyTpl(o, 'src/views/about.jsx.ejs', 'src/views/about.jsx');
    copyTpl(o, 'src/views/user.jsx.ejs', 'src/views/user.jsx');

    if (isCSSModule) {
      copy('src/views/about.scss');
      copy('src/views/user.scss');
    }

    if (isRouter && isRedux) {
      copy('src/app-router-redux.jsx', 'src/app.jsx');
      copy('src/wrap-router-redux.jsx', 'src/wrap.jsx');
    } else if (isRouter) {
      copy('src/app-router.jsx', 'src/app.jsx');
      copy('src/wrap-router.jsx', 'src/wrap.jsx');
    } else if (isRedux) {
      copy('src/app-redux.jsx', 'src/app.jsx');
      copy('src/wrap-redux.jsx', 'src/wrap.jsx');
    } else {
      copy('src/app.jsx');
    }

    // copy index.jsx
    if (isRedux || isRouter) {
      copy('src/index-wrap.jsx', 'src/index.jsx');
    } else {
      copy('src/index.jsx');
    }

  }
});
