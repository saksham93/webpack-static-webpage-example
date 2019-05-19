const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = (env, arg) => {
  const config = {
    entry: "./src/index.ts",
    output: {
      path: path.join(process.cwd(), "docs"),
      filename: "[name].[chunkhash].js",
      crossOriginLoading: false
    },
    resolve: {
      extensions: [".js", ".ts"]
    },
    module: {
      rules: [{
        test: /\.png$/,
        loader: 'file-loader'
      }, {
        test: /\.ts$/,
        loader: "ts-loader"
      }, {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader",
          options: { includePaths: ["./node_modules"] }
        }]
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        favicon: "./src/favicon.ico"
      })
    ],
    devServer: {
      port: 4200,
      historyApiFallback: true
    },
  };

  console.log(JSON.stringify(config.module.rules));
  if (arg.mode === "production") {
    config.plugins = config.plugins.concat([
      new CleanWebpackPlugin()
    ]);
  }

  return config;
};
