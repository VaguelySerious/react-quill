import fs from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve(new URL('.', import.meta.url).pathname, '..', '..', '..');
const pkgRoot = path.resolve(repoRoot, 'packages', 'react-quill-new');
const distDir = path.resolve(pkgRoot, 'dist');
const quillDistDir = path.resolve(repoRoot, 'node_modules', 'quill', 'dist');

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


