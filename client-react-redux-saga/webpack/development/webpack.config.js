const path = require('path')

var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var I18nPlugin = require('i18n-webpack-plugin')

var definePluginData = require('./definePlugin.config.js')

var languages = {
  'pl': require('../../locales/pl.json')
}

const DEBUG = true

module.exports = Object
    .keys(languages)
    .map(function (language) {
      return {
        name: language,
        devtool: 'cheap-module-source-map',
        entry: [
          'react-hot-loader/patch', 'babel-polyfill', './src/index.js'
        ],
        output: {
          path: path.join(__dirname, '../../'),
          publicPath: '/',
          filename: 'bundle.' + language + '.js'
        },
        plugins: [
          new webpack.LoaderOptionsPlugin({debug: DEBUG}),
          new webpack.DefinePlugin(definePluginData),
          new ExtractTextPlugin('styles.css'),
          new I18nPlugin(languages[language], {functionName: 'i18n'})
        ],
        module: {
          loaders: [
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
            }, {
              test: /\.(js|jsx)$/,
              loader: 'babel-loader',
              exclude: /node_modules/
            }
          ]
        },
        resolve: {
          extensions: ['.js', '.jsx', '.css']
        },
        devServer: {
          contentBase: path.join(__dirname, '../../src/public/'),
          host: '192.168.1.18',
          port: 8080,
          hot: true,
          historyApiFallback: true
        }
      }
    })
