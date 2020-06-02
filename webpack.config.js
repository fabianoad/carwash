const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
mode:"development",
  entry: './src/index.js',
  plugins: [ new UglifyJSPlugin()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
    module: {
        rules: [
            {
              test:/\.svg$/,
              use:['file-loader']
            },
            {
              test:/\.css$/,
              use:['style-loader', 'css-loader']
            },
            { test: /\.m?js$/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react' ]
                }
              }
            }

        ]
    }

};
