import path from "path";
import webpack from "webpack";
import qs from "querystring";

const root = process.cwd();
const src = path.join(root, "src");

const clientSrc = path.join(src, "client");
const universalSrc = path.join(src, "universal");

const clientInclude = [clientSrc, universalSrc];

const babelQuery = {
  presets: ["react", ["env", { modules: false }], "stage-0"],
  plugins: ["transform-decorators-legacy", "react-hot-loader/babel", "async-to-promises"]
};

export default {
  devtool: "eval",
  context: src,
  entry: {
    app: [
      "babel-polyfill/dist/polyfill.js",
      "react-hot-loader/patch",
      "webpack-hot-middleware/client?noInfo=false",
      "./client/client.js"
    ]
  },
  output: {
    filename: "app.js",
    chunkFilename: "[name]_[chunkhash].js",
    path: path.join(root, "build"),
    publicPath: "/static/"
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __PRODUCTION__: false,
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],
  resolve: {
    extensions: [".js"],
    modules: [src, "node_modules"]
  },
  module: {
    loaders: [
      {
        test: /\.(png|j|jpeg|gif|svg|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000
          }
        }
      },

      // Javascript
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["env"],
          plugins: ["transform-runtime"]
        },
        include: clientInclude
      },

      // CSS
      {
        test: /\.css$/,
        include: clientInclude,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              root: src,
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64:5]"
            }
          }
        ]
      }
    ]
  }
};