const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack_rules = [];
const webpackOption = [{
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: webpack_rules,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}];
let babelLoader = {
    test: /\.(js|jsx)$/,
    exclude: /(node_modules)/,
    use: {
        loader: "babel-loader"
    }
};
let htmlLoader = {
    test: /\.html$/,
    loader: "html-loader"
};
webpack_rules.push(babelLoader);
webpack_rules.push(htmlLoader);
module.exports =webpackOption;