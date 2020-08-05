const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
      rules: [
        {
          test: /\.html$/i,
          use:[
            {
              loader: 'html-loader',
              optiond: {minimize: true}
            }
          ]
          
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader',
          },
        },
        {
          test: /\.scss$/,
          use: [
              'vue-style-loader',
              'css-loader',
              'sass-loader',
          ],
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
      },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin(
        {
          template: "../src/index.html",
          filename:"./index.html"
        }
      ),
    ],
  };