const webpack = require("webpack"),
    path = require("path"),
    BUILD_DIR = path.resolve(__dirname, "static/js"),
    APP_DIR = path.resolve(__dirname, "src/js");

var config = {
    entry: APP_DIR + "/app.jsx",
    output: {
        path: BUILD_DIR,
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};

module.exports = config;