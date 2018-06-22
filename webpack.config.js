var path = require('path');
var webpack = require('webpack');
var glob = require('glob');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        path.resolve(__dirname, './src')
    ],
    output: {
        path: path.resolve(__dirname, "./build"),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        //配置项,设置忽略js后缀
        extensions: ['', '.js', '.less', '.css', '.png', '.jpg'],
        root: './src'
    },
    module: {
        loaders: [{
            test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg)$/,
            loader: 'url?limit=10000&name=images/[name].[ext]'
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('style', 'css!less')
        }, {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015'],
                plugins: ['transform-class-properties']
            }
        }, {
            test: /\.html$/,
            loader: 'html?attrs=img:src img:srcset'
        },  {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.css$/,
            loaders: ['style','css','autoprefixer']
        }, {
            test: /\.scss/,
            loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version"]}!sass-loader?outputStyle=expanded'
        }]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: "errors-only",
        host: '0.0.0.0',
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
};