import pkg from './package.json';
import {uglify} from 'rollup-plugin-uglify';
import typescript from 'rollup-plugin-typescript';

const INPUT = 'src/main.ts';
const OUTPUT_FORMAT = 'umd';
const OUTPUT_NAME = 'Position';

export default [{
    input: INPUT,
    output: {
        file: pkg.main,
        format: OUTPUT_FORMAT,
        name: OUTPUT_NAME
    },
    plugins: [
        uglify(),
        typescript()
    ]
}, {
    input: INPUT,
    output: {
        file: pkg.main.replace(/min\.js$/, 'js'),
        format: OUTPUT_FORMAT,
        name: OUTPUT_NAME
    },
    plugins: [typescript()]
}];
