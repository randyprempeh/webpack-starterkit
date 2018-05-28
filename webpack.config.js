const path = require("path");

module.exports = {
    // The main file for our js
    entry: "./src/index.js",
    // The output files
    output: {
        // Where wewant to put our output files
        path: path.resolve(__dirname, "dist"),
       // The name of our main file
       filename: "bundle.js"

    }
}