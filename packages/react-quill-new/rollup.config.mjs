import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';

/**
 * Browser bundle for simple <script> usage.
 * - outputs: dist/react-quill.js
 * - global: ReactQuill (with ReactQuill.default + ReactQuill.Quill)
 * - externals: react, react-dom (provided by CDN scripts)
 * - bundled: quill, lodash-es, and other deps
 */
export default {
  input: 'src/index.tsx',
  external: ['react', 'react-dom'],
  plugins: [
    resolve({
      browser: true,
      extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
    }),
    commonjs(),
    esbuild({
      target: 'es2017',
      jsx: 'automatic',
      tsconfig: 'tsconfig.json',
    }),
  ],
  output: {
    file: 'dist/react-quill.js',
    format: 'iife',
    name: 'ReactQuill',
    exports: 'named',
    sourcemap: true,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
};


