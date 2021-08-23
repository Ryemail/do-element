const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { DefinePlugin } = require('webpack');

module.exports = {
	mode: 'production',
	target: ['web', 'es5'],
	entry: path.resolve(__dirname, '..', 'packages/index.js'),
	output: {
		path: path.resolve(__dirname, '..', 'lib'),
		filename: 'index.js',
		chunkFilename: '[id].js',
		umdNamedDefine: true,
		library: {
			name: 'DOELEMENT',
			type: 'umd',
			export: 'default',
		},
		globalObject: "typeof self !== 'undefined' ? self : this",
	},
	resolve: {
		alias: {
			packages: path.resolve(__dirname, '../packages'),
			examples: path.resolve(__dirname, '../examples'),
			'@': path.resolve(__dirname, '../src'),
		},
		modules: ['node_modules'],
	},
	externals: {
		vue: 'Vue',
		'element-ui': 'element-ui',
		root: 'Vue',
		commonjs: 'vue',
		commonjs2: 'vue',
		amd: 'vue',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'vue-loader',
				},
			},
			{
				test: /\.(jsx?|babel|es6)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				},
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
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new DefinePlugin({
			'process.env.BASE_URL': JSON.stringify('./'),
		}),
	],
};
