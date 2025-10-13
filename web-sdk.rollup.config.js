const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
    input: 'src/util/Injected/web-sdk.js',
    output: {
        file: 'dist/exposed-web-sdk.js',
        format: 'iife',
        name: 'ExposedWebSDK',
        exports: 'auto'
    },
    plugins: [
        resolve({
            preferBuiltins: false,
        }),
        commonjs({
            include: 'src/util/Injected/**'
        }),
    ]
};
