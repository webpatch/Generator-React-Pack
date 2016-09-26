var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(config.port, config.host, function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://' + config.host + ':' + config.port + '/');
});
