const path = require('path')

module.exports = {
    entry: './shop/src/shop.js',
    output: {
        path: path.resolve(__dirname, 'shop/js'),
        filename: 'shop.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader' },
                ],
            },
        ]
    }
}

