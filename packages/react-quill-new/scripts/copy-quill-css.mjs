import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const pkgRoot = path.resolve(new URL('.', import.meta.url).pathname, '..');
const distDir = path.resolve(pkgRoot, 'dist');

// Find quill package dynamically (works with pnpm's node_modules structure)
const quillPkgPath = require.resolve('quill/package.json');
const quillDistDir = path.resolve(path.dirname(quillPkgPath), 'dist');

const files = [
  'quill.core.css',
  'quill.core.css.map',
  'quill.snow.css',
  'quill.snow.css.map',
  'quill.bubble.css',
  'quill.bubble.css.map',
];

fs.mkdirSync(distDir, { recursive: true });

for (const file of files) {
  const from = path.resolve(quillDistDir, file);
  const to = path.resolve(distDir, file);
  if (!fs.existsSync(from)) {
    // eslint-disable-next-line no-console
    console.warn(`[copy-quill-css] missing: ${from}`);
    continue;
  }
  fs.copyFileSync(from, to);
}
