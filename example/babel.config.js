module.exports = {
    presets: ['@vue/cli-plugin-babel/preset'],
    plugins: [
        [
            'import',
            {
                libraryName: 'do-design',
                style: false,
            },
        ],
    ],
};
