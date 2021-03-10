const { merge } = require('webpack-merge')
const base = require('./webpack.config')

module.exports = merge(base, {
    devServer: {
        contentBase: './shop/src/public',
        publicPath: './shop/src',
        host: 'localhost',
        port: 9000,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
})