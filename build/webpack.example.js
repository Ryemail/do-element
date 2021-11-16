const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, '..', 'example/main.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'js/[name].js',
		clean: true,
		publicPath: '/',
	},
	devServer: {
		open: true,
		hot: true,
		port: 8083, // 端口号
		historyApiFallback: true,
	},
	resolve: {
		alias: {
			packages: path.resolve(__dirname, '../packages'),
			examples: path.resolve(__dirname, '../examples'),
			'@': path.resolve(__dirname, '../src'),
		},
		modules: ['node_modules'],
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: [{ loader: 'vue-loader' }],
			},
			{
				test: /\.(css|less)$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'less-loader' },
				],
			},
			{
				test: /\.(eot|ttf|woff|woff2?)$/,
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024,
					},
				},
			},
			{
				test: /\.(svg|gif|png|jpe?g)(\?\S*)?$/,
				type: 'asset',
				generator: {
					filename: 'images/[name].[hash:6].[ext]',
				},
				parser: {
					dataUrlCondition: {
						maxSize: 8 * 1024,
					},
				},
			},
			{
				test: /\.(|js|vue)$/,
				use: ['eslint-loader'],
				include: /(example|packages|src)/,
			},
		],
	},
	plugins: [
		new DefinePlugin({
			'process.env.BASE_URL': JSON.stringify('./'),
		}),
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, '..', 'example/index.html'),
		}),
	],
};
