var BundleTracker  = require('webpack-bundle-tracker');


module.exports = {
  entry: ['@babel/polyfill', './frontend/src/index.jsx'],
  output: {
    filename: 'main.js',
    path: __dirname + '/frontend/static/frontend'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
   plugins: [
      new BundleTracker({path: __dirname, filename: 'webpack-stats.json'})
    ]
};
