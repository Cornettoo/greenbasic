const path = require('path');
const isDevelopment = process.env.NODE_ENV === 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
var PACKAGE = require('./package.json');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = build => {

	//* All variables for theme development *//
	var themefolderName = PACKAGE.folder;
	var themeUrl = PACKAGE.url;
	var development = build ? true : false;

	//* Variables that change when developmentMode is changed *//
	var themefolder = '../' + themefolderName;
	var themeMode = 'production';
	var themeDevTool = false;
	if (development == true) {
		themeMode = 'development';
		themeDevTool = 'inline-source-map';
		themeWatch = true;
	}

	return {
		mode: themeMode,
		devtool: themeDevTool, // any "source-map"-like devtool is possible
		entry: {
			index: '../src/index.js',
		},
		output: {
			path: path.resolve(__dirname, '../dist/assets/'),
			filename: '[name].js',
		},
		module: {
			rules: [{
					test: /.scss/,
					enforce: "pre",
					loader: "import-glob-loader",
				},
				{
					test: /\.(t|j)s?$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
					options: {
						presets: ['@babel/preset-env']
					}
				},
				{
					test: /\.s(a|c)ss$/,
					use: [
						isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
						'css-loader',
						{
							loader: 'sass-loader',
							options: {
								sourceMap: isDevelopment
							}
						},

						{
							loader: 'postcss-loader',
							options: {
								config: {
									path: path.resolve(__dirname, './config'),
								},
								sourceMap: isDevelopment
							}
						}
					]
				},

			]
		},
		resolve: {
			extensions: [".js", ".jsx", ".ts", ".tsx", '.scss'],
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: isDevelopment ? '[name].css' : '[name].css',
				chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
			}),
			new CleanWebpackPlugin(),
			new FriendlyErrorsWebpackPlugin(),
			new CopyPlugin({
				patterns: [{
					from: '../src/fonts/**/*',
					to: path.resolve(__dirname, '../dist/assets/'),
					flatten: true
				}, ],
			}),
		]
	};
};