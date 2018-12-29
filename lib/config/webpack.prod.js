import webpack from 'webpack';
import path from 'path';
const env = process.env.NODE_ENV;

export default {
  mode: 'production',
  entry: {
    main: path.join(__dirname, '../assets/js/index.js')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname)
              }
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "../public"),
    filename: "[name].bundle.js"
  }
};

