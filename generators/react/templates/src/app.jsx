/**
 * Created by kiny on 16/9/7.
 */
import React, { Component } from 'react';

import './css/main.scss'; // 导入全局样式文件
import User from './views/user';

export default class App extends Component {
  render() {
    return (
      // 程序入口组件
      <div>
        <div>Hello world!</div>
        <User />
      </div>
    );
  }
}
