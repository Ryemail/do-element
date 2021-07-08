import pkg from './package.json';

import plugins from './build/plugins';
import packagesOutput from './build/packges.output';

// 输出
const output = [
    {
        file: pkg.main,
        format: 'umd',
        name: 'DoDesign',
        exports: 'auto',
        globals: {
            vue: 'Vue',
            axios: 'axios',
        },
    },
    { file: pkg.module, format: 'es', name: 'DoDesign', exports: 'auto' },
    { file: pkg.main, format: 'cjs', name: 'DoDesign', exports: 'auto' },
];

const config = [
    {
        input: './packages/index.js', // 输入
        output, // 输出
        plugins, // 插件
        external: ['vue', 'element-ui', 'axios'], // 外部依赖(不打包)
    },
    ...packagesOutput,
];

export default config;
