const path = require('path');

module.exports = {
    commonn: {
        convertPxToRem: {
            enable: false,
            options: {
                root: 108, // 设计稿为3倍图
                filter: /^border/,
                fixed: 4,
            },
        },
    },
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: '.',
        assetsPublicPath: '/',
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report,
    },
    dev: {
        env: require('./dev.env'),
        host: 'localhost',
        port: 8080,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        cssSourceMap: false,
    },
};
