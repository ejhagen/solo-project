const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
//requiring in process for future use of process.env.NODE_ENV
const process = require('process');


module.exports = {
  //mode: can toggle from development to production with 'mode' using NODE_ENV = __ and process.env.NODE_ENV
  //entry: where webpack starts bundling the js files
  //output: describe the path and filename 
  mode: 'development',
  entry: '/src/index.js',
  output: {
      path: path.resolve(__dirname, "dist"),
      filename: 'bundle.js',
      publicPath: '/'
  },

  devServer: {
    static: {
        directory: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    compress: true,
    port: 8080,
                      //uri for proxy? 
    //   proxy: {
  //     '/api/**': {
  //       target: 'http://localhost:3000/',
  //       secure: false,
  //     }
  },
  module: {
      rules: [
          {
              test: /\.jsx?/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
          },
          {
              //Babel config for CSS files
            test: /.(css|scss)$/,
            exclude: /node_modules/,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
              //Babel config for images
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: ['file-loader'],
          },
          {
              //Babel config for SVG as react component
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          }
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: path.join(__dirname, "src", "index.html"),
      }),
  ],
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  }
}