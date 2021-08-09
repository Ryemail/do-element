module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				modules: false,
				useBuiltIns: 'usage',
				targets: {
					browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
				},
				corejs: 3,
			},
		],
	],
	plugins: ['@babel/plugin-transform-runtime'],
};
