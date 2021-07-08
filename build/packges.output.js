import packagesPlugins from './packges.plugins';
const path = require('path');
const fs = require('fs');

// 获取当前文件夹下所有子文件夹名称
let componentFileNames = [];
const files = fs.readdirSync(path.join(__dirname, '/packages'));
files.forEach((file) => {
    const stat = fs.lstatSync(path.join(__dirname, `/packages/${file}`));
    // 判断是否是文件夹
    if (stat.isDirectory()) {
        componentFileNames.push(file);
    }
});

// 单个组件分别打包配置
const packagesOutput = componentFileNames.map((item) => {
    return {
        input: `packages/${item}/index.js`,
        output: [
            {
                file: `lib/${item}.js`,
                format: 'umd',
                name: `${item}`,
                exports: 'auto',
            },
        ],
        plugins: packagesPlugins(item), // 输出
        external: ['vue', 'element-ui', 'axios'], // 外部依赖
    };
});

export default packagesOutput;
