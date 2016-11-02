/**
 * Created by kiny on 16/9/7.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/main.scss'; // import global css style

import { syncAction } from './model/action';
import Hello from './hello';

class App extends Component {
  render() {
    const { dispatch, appState:{ data } } = this.props;
    return (
      // App root node
      <div>
        <Hello>Hello, world from CSS modules!</Hello>
        <div>{data}</div>
        <button onClick={() => dispatch(syncAction(`You click me! ${Math.random()}`))}>
          click me!
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appState: state.appState,
  };
}

export default connect(mapStateToProps)(App);
