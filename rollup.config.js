import pkg from './package.json';
import {uglify} from 'rollup-plugin-uglify';
import typescript from 'rollup-plugin-typescript';

export default {
    input: 'src/main.ts',
    output: {
        file: pkg.main,
        format: 'umd',
        name: 'Position'
    },
    plugins: [
        uglify(),
        typescript()
    ]
};
