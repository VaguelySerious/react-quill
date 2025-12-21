import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';

/**
 * Demo-only browser bundle that pins Quill to 1.3.7.
 *
 * Output: dist/react-quill.js (to be copied into apps/demo/public/assets/react-quill-quill1.js)
 * Global: ReactQuill
 * Externals: react, react-dom
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
      jsx: 'transform',
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment',
      tsconfig: 'tsconfig.json',
    }),
  ],
  output: {
    file: 'dist/react-quill.js',
    format: 'iife',
    name: 'ReactQuill',
    exports: 'named',
    banner: 'var process = { env: { NODE_ENV: "production" } };',
    sourcemap: true,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
};


