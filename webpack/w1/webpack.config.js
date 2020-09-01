
const {resolve} = require("path");
module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "built.js",
        path: resolve(__dirname,"./build")
    },
    module: {

    },
    mode: "development"
}