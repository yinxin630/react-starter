const path = require('path');

module.exports = [
    {
        title: '默认页面',
        filename: 'index.html',
        template: path.resolve(__dirname, '../index.html'),
        inject: true,
        chunks: ['app'],
        entry: {
            key: 'app',
            file: path.resolve(__dirname, '../src/main.js'),
        },
    },
];
