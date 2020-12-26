import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Options as FileLoaderOptions } from 'file-loader';

const htmlPlugin = new HtmlWebpackPlugin({
  template: './public/index.html'
})

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  devtool: '#cheap-module-eval-source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        loader: 'ts-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
      }
    ]
  },

  plugins: [htmlPlugin]
}

export default config;