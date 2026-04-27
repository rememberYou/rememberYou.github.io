const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const faviconWebpack = new FaviconsWebpackPlugin({
  logo: './src/assets/logo.png',
  cache: true,
  inject: true,
});

const htmlPlugin = new HtmlWebpackPlugin({
  title: 'Terencio Agozzino',
  template: './public/index.html',
  filename: './index.html',
});

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';
  if (!isDev) {
    htmlPlugin.minify = {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      minifyURLs: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
    };
  }

  return {
    entry: './src/index.tsx',
    mode: argv.mode,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
    },
    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpe?g|gif)(\?.*)?$/,
          type: 'asset',
          parser: { dataUrlCondition: { maxSize: 8192 } },
          generator: {
            filename: isDev ? '[path][name][ext]' : 'img/[name]-[contenthash][ext]',
          },
        },
        {
          test: /\.svg$/,
          type: 'asset',
          parser: { dataUrlCondition: { maxSize: 8192 } },
          generator: {
            filename: isDev ? '[path][name][ext]' : 'img/[name]-[contenthash][ext]',
          },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          type: 'asset/resource',
          generator: {
            filename: isDev ? '[path][name][ext]' : 'fonts/[name]-[contenthash][ext]',
          },
        },
      ],
    },
    devServer: {
      port: process.env.PORT || 8080,
      static: path.resolve('dist'),
      historyApiFallback: true,
    },
    plugins: [htmlPlugin, faviconWebpack],
  };
};
