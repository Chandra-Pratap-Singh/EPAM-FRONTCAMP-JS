const path = require("path");

module.exports = {
    entry: ["babel-polyfill", "./src/controller/index.js"],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: [
                    {loader: "url-loader"}
                ]
            }
        ]
    }
}