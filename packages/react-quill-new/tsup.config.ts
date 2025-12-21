import { defineConfig } from 'tsup';

/**
 * `lib/` build for npm consumers.
 *
 * `dist/` is built separately via Rollup (`rollup.config.mjs`) so we can keep
 * the historical global bundle filename `dist/react-quill.js`.
 */
export default defineConfig({
  name: 'lib',
  entry: ['src/index.tsx'],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: 'lib',
  target: 'es2020',
  splitting: false,
  treeshake: true,
  external: ['react', 'react-dom'],
});
