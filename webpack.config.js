const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.(js|jsx)$/,
      exclude: /node_modules/
    }, {
      /* The order of loaders matters */
      use: ['style-loader', 'css-loader', 'sass-loader'],
      test: /\.s?css$/,
    }]
  },
  devtool: 'simple-eval-source-map'
}
