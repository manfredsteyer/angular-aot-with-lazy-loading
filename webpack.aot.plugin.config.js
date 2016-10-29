var webpack = require('webpack');
var CompressionPlugin = require("compression-webpack-plugin");

const AotPlugin = require('@ngtools/webpack').AotPlugin;

module.exports = {

    profile: true,
    devtool: false,
    entry: {
        'polyfills': './app/polyfills',
        'app': './app/main.jit'
    },
    output: {
        path: __dirname + "/dist/aot",
        filename: "[name].js",
        publicPath: "dist/aot/"
    },
    resolve: {
        extensions: ['.ts', '.js', '.jpg', '.jpeg', '.gif', '.png', '.css', '.html']
    },
    module: {
        rules: [
            { test: /\.(jpg|jpeg|gif|png)$/, loader:'file-loader?name=img/[path][name].[ext]' },
            { test: /\.(eof|woff|woff2|svg)$/, loader:'file-loader?name=img/[path][name].[ext]' },
            { test: /\.css$/, loader:'raw-loader' },
            { test: /\.html$/,  loaders: ['html-loader'] },
            { test: /\.ts$/, loaders: ['@ngtools/webpack', 'angular2-router-loader?aot=true&genDir=aot/app']}
        ],
        exprContextCritical: false,
    },
    plugins: [
        new AotPlugin({
            tsConfigPath: './tsconfig.json',
            entryModule: 'app/app.module#AppModule'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],
    node: {
        __filename: true
    },
    devServer: {
        inline:true,
        port: 8080,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
  
};
