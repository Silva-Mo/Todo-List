const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map', // enable source maps for JS and CSS globally

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true, // enable CSS source maps in loader
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
  ],

  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        parallel: true,
        minimizerOptions: {
          preset: [
            'default',
            { discardComments: { removeAll: true }, mergeLonghand: true, cssDeclarationSorter: true },
          ],
        },
      }),
      '...',
    ],
  },
});

