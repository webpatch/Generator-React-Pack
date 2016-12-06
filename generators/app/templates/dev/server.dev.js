const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');
const config = require('../app.config');

const { port, host } = config.server;

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(port, host, function (err, result) {
  if (err) return console.log(err);
  console.log(chalk.green(`Dev server listening on http://${host}:${port} ...`))
});
