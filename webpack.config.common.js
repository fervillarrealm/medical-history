var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './assets/app/main.ts'
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader'}]
            },
            {
                test: /\.css$/,
                use: [{ loader: 'raw-loader' }]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                use: [{
                    loader: "file-loader",
                    options: {}
                }]
            }
        ],
        exprContextCritical: false
    }
};
