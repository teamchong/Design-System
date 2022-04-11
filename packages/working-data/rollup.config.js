import { dirname } from 'path';
import pkg from './package.json';

// eslint-disable-next-line no-restricted-syntax
export default {
    input: 'build/index.js',

    output: [
        {
            format: 'cjs',
            file: pkg.main,
        },
        {
            format: 'esm',
            dir: dirname(pkg.module),
            preserveModules: true,
            entryFileNames: '[name].mjs',
        },
    ],
    external: [
        '@stencil/core',
        '@eventstore/components',
        '@eventstore/stores',
        '@eventstore/utils',
    ],
};
