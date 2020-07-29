const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const devMode = process.env.NODE_ENV != 'production';

module.exports = {
    entry: {
        index: './frontend/js/index.js',
        registro: './frontend/js/registro.js',
        consulta: './frontend/js/consulta.js',
        edicion: './frontend/js/edicion.js',
        eliminacion: './frontend/js/eliminacion.js'
    },
    output: {
        path: path.join(__dirname, 'backend/public/'),
        filename: 'js/[name].bundle.js'
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.css/,
            use: [
                devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        }, {
            test: /\.(jpg|png)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img/',
                    useRelativePath: true
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './frontend/views/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'ForRegistro.html',
            template: './frontend/views/ForRegistro.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'ForConsultar.html',
            template: './frontend/views/ForConsultar.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'ForEditar.html',
            template: './frontend/views/ForEditar.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'ForEliminar.html',
            template: './frontend/views/ForEliminar.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'css/bundle.css'
        })
    ],
    devtool: 'source-map'
}