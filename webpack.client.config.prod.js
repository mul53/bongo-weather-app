const path = require('path')

module.exports = {
    mode: "production",
    entry: [
        path.resolve('client/src/index.js')
    ],
    output: {
        path: path.resolve('build'),
        filename: 'client.bundle.js',
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif|ttf|woff)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[hash].[ext]'
                    }
                  }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}