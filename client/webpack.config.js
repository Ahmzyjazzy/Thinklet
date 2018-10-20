const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  module: {
      rules: [
          { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'},
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {}
              }
            ]
          }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'index.html'})
  ]

};

