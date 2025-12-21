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
      // IMPORTANT: for the plain browser bundle, avoid the "automatic" JSX runtime
      // (react/jsx-runtime) because it may rely on Node globals like `process`.
      // Compile JSX to React.createElement instead.
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
    // Some transitive deps (or dev React runtime) may reference `process.env.NODE_ENV`.
    // Provide a minimal shim so the bundle runs in browsers without bundler polyfills.
    banner: 'var process = { env: { NODE_ENV: "production" } };',
    sourcemap: true,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
};
