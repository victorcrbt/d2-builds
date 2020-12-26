import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const htmlPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
});

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@config': path.resolve(__dirname, 'src', 'config'),
      '@constants': path.resolve(__dirname, 'src', 'constants'),
      '@contexts': path.resolve(__dirname, 'src', 'contexts'),
      '@helpers': path.resolve(__dirname, 'src', 'helpers'),
      '@hocs': path.resolve(__dirname, 'src', 'hocs'),
      '@hooks': path.resolve(__dirname, 'src', 'hooks'),
      '@i18n': path.resolve(__dirname, 'src', 'i18n'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@services': path.resolve(__dirname, 'src', 'services'),
      '@store': path.resolve(__dirname, 'src', 'store'),
      '@styles': path.resolve(__dirname, 'src', 'styles'),
    },
  },

  devtool: '#cheap-module-eval-source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
      },
    ],
  },

  plugins: [htmlPlugin],
};

export default config;
