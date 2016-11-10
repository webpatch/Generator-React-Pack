/**
 * Created by kiny on 16/9/7.
 */
import React, { Component } from 'react';
import './css/main.scss'; // 导入全局样式文件

import Hello from './hello';

export default class App extends Component {
  render() {
    return (
      // 程序入口组件
      <div>
        <Hello>Hello, world from CSS modules!</Hello>
      </div>
    );
  }
}

// ts
// js
// css
// redux
// router
// css-redux
// css-router
// css-redux-router
// redux-router