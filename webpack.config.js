const path = require('path');

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: './client/src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  output: {
    publicPath: 'client/public',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/public'),
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
