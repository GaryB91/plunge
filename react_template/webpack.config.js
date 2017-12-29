const webpack = require("webpack"),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    path = require("path"),
    JS_BUILD_DIR = path.resolve(__dirname, "static/js"),
    JS_APP_DIR = path.resolve(__dirname, "src/js"),
    CSS_BUILD_DIR = path.resolve(__dirname, "static/css"),
    CSS_APP_DIR = path.resolve(__dirname, "src/sass");

var config = {
    entry: [
        JS_APP_DIR + "/app.jsx",
        CSS_APP_DIR + "/styles.scss"
    ],
    output: {
        path: JS_BUILD_DIR,
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: JS_APP_DIR,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(
                    [
                        'css-loader', 
                        'sass-loader'
                    ]
                )
            }
        ]
    },
    plugins: [
    new ExtractTextPlugin({ // define where to save the file
        filename: "../css/styles.bundle.css",
        allChunks: true,
    }),
  ]
};

module.exports = config;