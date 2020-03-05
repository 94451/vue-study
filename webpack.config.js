const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + 'build',
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": [
                        [
                            "@babel/env",
                            {
                                "targets": {
                                    "edge": "17",
                                    "firefox": "60",
                                    "chrome": "37",
                                    "safari": "11.1"
                                },
                                "useBuiltIns": "usage"
                            }
                        ]
                    ]
                }
            }
        }, {
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader',
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: false
            },
            hash: true
        }),
        new VueLoaderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    devtool: "source-map",
    devServer: {
        port: 8080,
        host: 'localhost',
        overlay: {
            errors: true
        },
        hot: true
    }

}