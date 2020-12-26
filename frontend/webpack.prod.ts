import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Options as FileLoaderOptions } from 'file-loader';

const htmlPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: './index.html',
})

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.tsx$/, 
        loader: 'ts-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          outputPath: './assets/images'
        } as FileLoaderOptions
      }
    ]
  },

  plugins: [htmlPlugin]
}

export default config;