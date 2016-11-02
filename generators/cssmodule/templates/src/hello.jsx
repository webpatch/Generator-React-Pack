/**
 * Created by dz on 16/11/2.
 */

import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './hello.scss';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class Hello extends Component {
  static propTypes = {
    children: PropTypes.string
  };

  render() {
    return (
      <div styleName="hello">{this.props.children}</div>
    );
  }
}

