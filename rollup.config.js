// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import pkg from './package.json';

const githubPagesDir = 'ghpages';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: `${githubPagesDir}/src/component-lib/index.js`,
            format: 'esm',
            banner: '/* eslint-disable */',
        },
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' },
    ],
    plugins: [
        del({
            targets: [
                'dist/*',
            ]
        }),
        typescript({
            objectHashIgnoreUnknownHack: true,
        }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};