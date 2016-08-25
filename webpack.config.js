require('webpack')
require('weex-loader')

var path = require('path')

module.exports = {
    entry: {
        main: path.join(__dirname, 'src', 'main.we?entry=true')
    },
    output: {
        path: 'dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.we(\?[^?]+)?$/,
                loaders: ['babel-loader', 'weex-loader']
            },
            {
                test: /\.js(\?[^?]+)?$/,
                exclude: [path.resolve(__dirname,'src')],
                loaders: [ 'babel-loader'],
            }
        ]
    }
}
