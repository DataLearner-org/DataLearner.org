/* eslint-disable */
const { ProvidePlugin } = require('webpack');

function webpackPlugin(context, options) {
  return {
    name: 'webpack-plugin',
    configureWebpack(config) {
      return {
        module: {
          rules: [
            {
              test: /\.m?js/,
              resolve: {
                fullySpecified: false,
              },
            },
            {
              test: /\.scss$/,
              use: [
                  "style-loader", // 3. Inject styles into DOM
                  "css-loader", // 2. Turns css into commonjs
                  "sass-loader", // 1. Turns sass into css
              ],
          },
          ],
        },
        plugins: [
          new ProvidePlugin({
            process: require.resolve('process/browser'),
          }),
        ],
        resolve: {
          fallback: {
            stream: require.resolve('stream-browserify'),
            path: require.resolve('path-browserify'),
            buffer: require.resolve('buffer/'),
            url: require.resolve('url'),
            crypto: false,
          },
          alias: {
            process: 'process/browser.js',
          },
        },
      };
    },
  };
}

module.exports = {
  webpackPlugin,
};
