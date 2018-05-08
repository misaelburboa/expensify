const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction =  env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return{
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    //'loader' is used for using a single loader
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },{
                    "test": /\.s?css$/,
                    //'use' is used for using multiple loaders, in this case we are
                    //using the ExtractTextPlugin in order to get the css files in another separated file
                    "use": CSSExtract.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map', //shows the error queue easily for developer, it is used to track the error | (sourcemaps)
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
}
