import typescript from 'rollup-plugin-typescript';

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/element-position.js',
        format: 'umd',
        name: 'Position'
    },
    plugins: [
        typescript()
    ]
};
