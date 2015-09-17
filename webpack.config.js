module.exports = {
    entry: "./main.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "babel" },
            { test: /\.scss$/, loader: "style!css!sass!autoprefixer" },
            { test: /\.jpg$/, loader: "url-loader?mimetype=image/jpg" }
        ]
    }
};