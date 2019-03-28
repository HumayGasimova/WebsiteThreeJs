const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});
console.log(__dirname)
module.exports = {
  entry: __dirname + '/src/index.js',
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      // {
      //   test: /\.(png|gif|jpg|jpeg|svg|ico)$/,
      //   use:  'file-loader?name=[name].[ext]'
      // },
      {
        test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: 'base64-inline-loader'
      }
    ]
  },
  output: {
    filename: 'transformed.js',
    path: __dirname + '/build'
  },
  devServer: {
    contentBase: './build',
    port: 8080,
    historyApiFallback: true
  },
  plugins: [HTMLWebpackPluginConfig]
};