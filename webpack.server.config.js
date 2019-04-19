const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    server: './server/index.js',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  externals: [nodeExternals()],
  output: {
    filename: '[name].bundle.js',
    publicPath: '/build/',
    path: path.resolve(__dirname, 'build'),
  }
}