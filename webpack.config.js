const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5');

module.exports = {
    entry: {
        shop: './shop/src/js/main.js',
        // form: './shop/src/js/form.js',
    },
    output: {
        path: path.resolve(__dirname, 'shop/public'),
        filename: '[name].js',
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        },
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
                test: /\.сss$/i,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                    },
                ],
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'shop/public'),
        publicPath: path.join(__dirname, 'shop/src'),
        host: 'localhost',
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}

