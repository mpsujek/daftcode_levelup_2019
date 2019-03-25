var path = require('path');
var HtmlWebackPlugin = require('html-webpack-plugin');
import { body } from './src/script.js';
module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, './dist'),
        filename:'main.js'
    },
    plugins:[new HtmlWebackPlugin()],
    mode:'development',//'production'
    module:{
        rules:[{
            test:/\.js$/,
            exclude: /node_modules/,
            use: {
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            }
        }]
    }
    
};