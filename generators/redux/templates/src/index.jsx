import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import StoreWrap from './store-wrap';

const rootEl = document.getElementById('root');

ReactDOM.render(
  (<AppContainer><StoreWrap /></AppContainer>), rootEl
);

if (module.hot) {
  module.hot.accept('./store-wrap', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./store-wrap').default;

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
