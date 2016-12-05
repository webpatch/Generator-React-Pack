/**
 * Created by dz on 16/11/1.
 */

const defaultPackage = (projectName, userName = '', email = '') => (
  {
    "name": projectName.toLocaleLowerCase().replace(' ', '_'),
    "version": "0.0.0",
    "description": "",
    "homepage": "",
    "author": {
      "name": userName,
      "email": email,
      "url": ""
    },
    "main": "index.js",
    "scripts": {
      "precommit": "npm run precheck",
      "precheck": "npm run eslint",
      "eslint": "cross-env NODE_ENV=test eslint --cache --ext .jsx,.js src/",
      "csslint": "stylelint src/**/*.scss --syntax scss",
      "start": "node ./dev/server.dev.js",
      "dstart": "cross-env NODE_ENV=production node ./dev/server.dist.js",
      "dist": "rimraf dist/ && cross-env NODE_ENV=production webpack --config ./dev/webpack.config.js && npm run dstart",
    },
    "dependencies": {
      "babel-polyfill": "^6.13.0",
      "react": "^15.3.2",
      "react-dom": "^15.3.2",
      "react-hot-loader": "^3.0.0-beta.6",
    },
    "devDependencies": {
      "autoprefixer": "^6.3.6",
      "babel-core": "^6.14.0",
      "babel-eslint": "^7.0.0",
      "babel-loader": "^6.2.5",
      "babel-plugin-transform-decorators-legacy": "^1.3.4",
      "babel-preset-es2015": "^6.14.0",
      "babel-preset-react": "^6.11.1",
      "babel-preset-stage-1": "^6.13.0",
      "webpack": "^1.13.2",
      "webpack-dev-server": "^1.15.1",
      "resolve-url-loader": "^1.6.0",
      "file-loader": "^0.9.0",
      "url-loader": "^0.5.7",
      "style-loader": "^0.13.1",
      "css-loader": "^0.25.0",
      "sass-loader": "^4.0.2",
      "node-sass": "^3.10.0",
      "postcss-loader": "^0.8.2",
      "precss": "^1.4.0",
      "html-webpack-plugin": "^2.16.0",
      "extract-text-webpack-plugin": "^1.0.1",
      "eslint": "^3.4.0",
      "eslint-config-airbnb": "^10.0.1",
      "eslint-plugin-import": "^1.14.0",
      "eslint-plugin-jsx-a11y": "^2.2.1",
      "eslint-plugin-react": "^6.2.0",
      "stylelint": "^7.2.0",
      "stylelint-config-standard": "^13.0.0",
      "cross-env": "^2.0.1",
      "pug": "^2.0.0-beta6",
      "pug-loader": "^2.3.0",
      "copy-webpack-plugin": "^4.0.1",
      // dist 服务器
      "http-rewrite-middleware": "^0.1.6",
      "express": "^4.14.0",
      "rimraf": "^2.5.4",
    },
    "repository": "",
    "license": "MIT"
  }
);

const testPackage = {
  "scripts": {
    "bage": "node ./dev/bage.js",
    "test": "cross-env NODE_ENV=test karma start ./dev/karma.conf.js",
    "precheck": "npm run eslint && npm run test",
  },
  "devDependencies": {
    "babel-plugin-istanbul": "^2.0.1",
    "karma": "^1.3.0",
    "chai": "^3.5.0",
    "mocha": "^3.0.2",
    "karma-chai": "^0.1.0",
    "karma-chrome-launcher": "^2.0.0",
    "karma-coverage": "^1.1.1",
    "karma-mocha": "^1.1.1",
    "karma-sourcemap-loader": "^0.3.7",
    "karma-webpack": "^1.8.0",
  }
};

const ie8Package = {
  "scripts": {
    "start": "cross-env IE8_ENV=1 node ./dev/server.dev.js",
    "dstart": "cross-env IE8_ENV=1 NODE_ENV=production node ./dev/server.dist.js",
    "dist": "rimraf dist/ && cross-env IE8_ENV=1 NODE_ENV=production webpack --config ./dev/webpack.config.js && npm run dstart",
  },
  "dependencies": {
    "console-polyfill": "^0.2.3",
    "react": "^v0.14.8",
    "react-dom": "^v0.14.8",
    "react-hot-loader": "^3.0.0-beta.6",
  },
  "devDependencies": {
    "es3ify-loader": "^0.2.0",
  }
};

const CSSModules = {
  "dependencies": {
    "react-css-modules": "^3.7.10",
  },
};

const ie8CSSModules = {
  "dependencies": {
    "react-css-modules": "3.7.6",
  },
};

const Redux = {
  "dependencies": {
    "redux": "^3.6.0",
    "react-redux": "^4.4.5",
    "redux-thunk": "^2.1.0",
  }
};

const Router = {
  "dependencies": {
    "react-router": "^3.0.0",
  }
};

const ie8Router = {
  "dependencies": {
    "react-router": "2.3.0",
  },
};

const RouterRedux = {
  "dependencies": {
    "react-router-redux": "^4.0.6",
  }
};

const ie8RouterRedux = {
  "dependencies": {
    "react-router-redux-ie8": "^0.0.3",
  },
};

function merge(from, to) {
  let out = Object.assign({}, to);
  Object.keys(from).forEach(key => {
    if (key in out) {
      if (typeof out[key] === 'object') {
        out[key] = Object.assign({}, out[key], from[key]);
      } else {
        out[key] = from;
      }
    }
  });
  return out;
}

module.exports = {
  getPackageJSON: function (props) {
    let d = defaultPackage(props.projectName, props.userName, props.email);

    if (props.tools.includes('redux')) {
      d = merge(Redux, d);
    }

    if (props.needIE8) {
      d = merge(ie8Package, d);
      if (props.tools.includes('cssmodule')) {
        d = merge(ie8CSSModules, d);
      }

      if (props.tools.includes('router')) {
        d = merge(ie8Router, d);
        if (props.tools.includes('redux')) {
          d = merge(ie8RouterRedux, d);
        }
      }
    } else {
      if (props.tools.includes('cssmodule')) {
        d = merge(CSSModules, d);
      }

      if (props.tools.includes('router')) {
        d = merge(Router, d);
        if (props.tools.includes('redux')) {
          d = merge(RouterRedux, d);
        }
      }
    }

    if (props.needTest) {
      d = merge(testPackage, d);
    }
    return JSON.stringify(d, null, '  ');
  }
};

