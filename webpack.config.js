const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
//requiring in process for future use of process.env.NODE_ENV
const process = require('process')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
// Why is this commented out?
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //mode: can toggle from development to production with 'mode' using NODE_ENV = __ and process.env.NODE_ENV
    //entry: where webpack starts bundling the js files
    //output: describe the path and filename
    mode: process.env.NODE_ENV,
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'public'),
            publicPath: '/public',
        },
        compress: true,
        port: 8080,
        //uri for proxy?
        proxy: {
            '/fishdata': {
                target: 'http://localhost:3000/fishdata',
                secure: false,
            },
        },
    },
    // target: 'node',
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/proposal-class-properties'],
                    },
                },
            },
            {
                //Babel config for CSS files
                test: /scss$/,
                exclude: /node_modules/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
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
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
        }),
        new NodePolyfillPlugin(),
        // new MiniCssExtractPlugin(),
    ],
    resolve: {
        // Enable importing JS / JSX files without specifying their extension
        extensions: ['.js', '.jsx'],
        fallback: {
            fs: false,
            tls: false,
            net: false,
            path: false,
            zlib: false,
            http: false,
            https: false,
            stream: false,
            crypto: false,
            'crypto-browserify': require.resolve('crypto-browserify'),
        },
    },
}
