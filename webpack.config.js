var path = require('path');
var webpack = require('webpack');

const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const extractStyles = new ExtractTextPlugin('css/styles.min.css');

const config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    //publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        loader: extractStyles.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                // If you are having trouble with urls not resolving add this setting.
                // See https://github.com/webpack-contrib/css-loader#url
                url: false,
                minimize: true,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.(glsl|vs|fs)$/,
        loader: 'shader-loader',
        options: {
          glsl: {
            chunkPath: path.resolve(__dirname, './glsl/chunks'),
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'images/',
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.glsl', '.json']
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
    overlay: true,
    hot: true
  },
  performance: {
    hints: false
  }
}

config.plugins = [

  new SimpleProgressWebpackPlugin({
    format: 'expanded'
  }),

  extractStyles,
];

if (process.env.NODE_ENV === 'development') {

  config.devtool = 'cheap-module-source-map';
  config.plugins = (config.plugins || []).concat([

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),

    new webpack.HotModuleReplacementPlugin()

  ]);

}
else
if (process.env.NODE_ENV === 'production') {

  config.devtool = 'source-map'
  config.plugins = (config.plugins || []).concat([

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    }),

    new webpack.HashedModuleIdsPlugin(),

    new webpack.LoaderOptionsPlugin({
      minimize: true
    })

  ])
}

module.exports = config;
