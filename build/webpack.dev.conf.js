const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const pages = require('../config//pages');

const htmlPlugins = pages.map(page => new HtmlWebpackPlugin(page));

Object.keys(baseWebpackConfig.entry).forEach((name) => {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap }),
    },
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new FriendlyErrorsPlugin(),
        ...htmlPlugins,
    ],
});
