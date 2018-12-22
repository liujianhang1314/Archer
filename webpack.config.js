const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let htmlwebpackPlugin = new HtmlWebpackPlugin({
    filename:'index.html',
    template:path.resolve(__dirname,'./src/index.html')
});

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'main.js'
    },
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        compress:true,
        port:1208,
        open:true,
        inline:true,
        hot:true
    },
    plugins:[htmlwebpackPlugin],
    // 配置loader
    module:{
        // 根据文件后缀匹配规则
        rules:[
            // 配置js/jsx语法解析
            {
                test:/\.js|jsx$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.scss$/,
                use:[
                    "style-loader", //creates style nodes from JS strings
                    "css-loader",   //translates css into CommonJS
                    "sass-loader" // compiles sass to css
                ]
            }
        ]
    }
}