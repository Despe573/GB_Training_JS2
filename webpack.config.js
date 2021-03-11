const path = require('path')

module.exports = {
    entry: {
        shop: './shop/src/js/shop.js',
        form: './shop/src/js/form.js',
    },
    output: {
        path: path.resolve(__dirname, 'shop/public'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader' },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },

                ],
            },
        ]
    }
}

