var PROD = process.argv.indexOf('-p') >= 0;
var webpack = require('webpack');

module.exports = {
    plugins: [
        // new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            'typeof __DEV__': JSON.stringify('boolean'),
            __DEV__: PROD ? false : true
        })
    ],
    entry: {
        'echarts-bmap': __dirname + '/src/bmap.js'
    },
    output: {
        libraryTarget: 'umd',
        library: ['echarts-bmap'],
        path: __dirname + '/dist',
        filename: PROD ? '[name].min.js' : '[name].js'
    },
    externals: {
        'echarts/lib/echarts': 'echarts'
    }
};