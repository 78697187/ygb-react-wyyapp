const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    // entry: [
    //   'react-hot-loader/patch',
    //   './src/index.js'
    // ],
    alias: {
      "@": resolve("src"),
    }
  }
}