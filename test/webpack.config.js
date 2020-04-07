const { resolve } = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        // test: /\.vue$/,
        resourceQuery: /blockType=slot/,
        loader: resolve(__dirname, "../")
      }
    ]
  },
  resolve: {
    alias: {
      "vue-slot-loader": resolve(__dirname, "../")
    }
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
};
