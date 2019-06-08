const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;

module.exports = (env, arg) => {
  const config = {
    entry: "./src/index.ts",
    output: {
      path: require("path").join(process.cwd(), "docs"),
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
          loader: MiniCssExtractPlugin.loader
        }, {
          loader: "css-loader"
        }, {
          loader: "postcss-loader",
          options: {
            plugins: () => [
              require('autoprefixer')({}),
              require('cssnano')({ preset: 'default' })
            ]
          }
        }, {
          loader: "sass-loader",
          options: { includePaths: ["./node_modules"] }
        }]
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].scss",
        chunkFilename: "[id].scss"
      }),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        favicon: "./src/favicon.ico",
        minify: {
          collapseBooleanAttributes: true,
          collapseInlineTagWhitespace: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new HTMLInlineCSSWebpackPlugin()
    ],
    devServer: {
      port: 4200,
      historyApiFallback: true
    },
  };

  if (arg.mode === "production") {
    config.plugins = config.plugins.concat([
      new CleanWebpackPlugin()
    ]);
  }

  return config;
};
