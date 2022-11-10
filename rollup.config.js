import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'tests/top-level-imports.ts',
    output: {
      file: 'dist/rollup/tests.js',
      format: 'iife',
      freeze: false,
    },
    plugins: [
      commonjs(),
      nodeResolve(),
      typescript({tsconfig: 'tsconfig-rollup.json'}),
    ],
  },
];
