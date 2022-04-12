import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import packageJson from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({
      namedExports: {
        'node_modules/@mediapipe/face_detection/face_detection.js': ['FaceDetection', 'Results', 'NormalizeRect'],
        'node_modules/@mediapipe/camera_utils/camera_utils.js': ['Camera'],
      },
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    terser(),
  ],
};
