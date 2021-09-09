const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  return {
    entry: {
      app: './src/index.js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
      hot: true,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: { presets: ['@babel/env'] }
        },
        {
          test: /\.css$/i,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: false
              }
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Earthquake Zen Garden',
        template: './public/index.html',
        publicPath: '/'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].bundle.css',
        chunkFilename: '[id].css'
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    }
  }
};