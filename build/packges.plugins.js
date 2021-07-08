import resolve from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import { terser } from 'rollup-plugin-terser';
import alias from '@rollup/plugin-alias';
//const json = require('rollup-plugin-json');
const path = require('path');

const isProd = process.env.NODE_ENV == 'production';

export default function packagesPlugins(name) {
    // 通用的插件
    const basePlugins = [
        resolve(),
        //json(),
        alias({
            entries: [
                {
                    find: '@utils',
                    replacement: path.resolve(__dirname, 'utils'),
                },
            ],
        }),
        vue(),
        babel({
            exclude: 'node_modules/**', // 防止打包node_modules下的文件
            runtimeHelpers: true, // 使plugin-transform-runtime生效
        }),
        commonjs(),
        postcss({
            extract: `theme/${name}.css`,
            plugins: [cssnano],
        }),
    ];
    // 开发环境需要使用的插件
    const devPlugins = [];
    // 生产环境需要使用的插件
    const prodPlugins = [
        terser({
            compress: {
                pure_funcs: ['console.log'], // 去掉console.log函数
            },
        }),
    ];
    let plugins = [...basePlugins].concat(isProd ? prodPlugins : devPlugins);

    return plugins;
}
