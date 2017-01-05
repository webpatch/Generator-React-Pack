# generator-react-pack [![NPM version][npm-image]][npm-url] 

> ## Deprecated!! Use [react-pack-cli](https://github.com/webpatch/react-pack-cli) instead.

## Features

* React full packs
* ES7 support
* Hot reload
* Testing support
* IE8+ support (use React v0.14.8)
* Free combination


## app.config.js 文件参数

### server `<Object>`
本地服务器配置

```js
server: {
	host: 'localhost', // IP 地址
	port: 8000, // 端口号，发布模式的端口号为 port+1，即：8001
}
```

### copyFile `<array>`
复制静态文件至dist目录

```js
copyFile: [
	{ from: './single_part', to: './' }, // 复制整个目录
	{ from: './config.js', to: './config.js' }, // 复制文件
]
```

### html `<array|Object>`
根据参数动态生成一个或多个html文件

参数|类型|说明
---|---|---
title|`string`|标题
meta|`Array<Object>`|插入到head标签中的meta标签
links|`Array<string|Object>`|插入到head标签中的link标签
scripts |`Array<string|Object>`|插入到body标签尾部的script标签
baseHref|`string`|插入到head标签顶部的base标签，主要用于多路由下的资源相对路径问题

```js

html: [
	{
	  title: '视频直播',
	  baseHref: 'http://localhost:8000/',
	  meta:[
	  	{ 'http-equiv':'X-UA-Compatible', content:'IE=EDGE' }
	  ],
	  links: [
	    './static/bootstrap_part.min.css',
	    { href:'./static/bootstrap-datetimepicker.min.css', id:'dtcss' }
	  ],
	  scripts: [
	    './config.js',
	    './static/TweenLite.min.js',
	    { src:'./static/TweenLite.min.js', id:'tween' }
	  ],
	}
]
```

### entry `<string|array>`
整个Web程序入口文件

* 单入口

	```js
	entry: './src/index'
	```

* 多入口

	```js
	entry: {
		index: './src/index',
		login: './src/single-page/login',
		reg: './src/single-page/reg',
		reset: './src/single-page/reset'
	}
	```

### template `<string>`

```js
template: `./dev/template/index.pug`,
```

### filename `<string>`
生成的html文件名

```js
filename: `index.html`,
```


## Packages include

* base
	* webpack
	* babel

* react
	* react
	* react-router
	* react-hot-loader
	* react-css-modules
	* redux
	* react-redux
	* react-redux-router

* css
	* sass
	* postcss
	* autoprefixer

* lint
	* eslint
	* stylelint

* testing
	* karma
	* mocha
	* chai


## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-pack using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-react-pack
```

Then generate your new project:

```bash
yo react-pack
```

## WIP

* Typescript support
* Flow support

## License

MIT © [webpatch]()


[npm-image]: https://badge.fury.io/js/generator-react-pack.svg
[npm-url]: https://npmjs.org/package/generator-react-pack
