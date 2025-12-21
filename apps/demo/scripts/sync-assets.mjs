import fs from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve(new URL('.', import.meta.url).pathname, '..', '..', '..');
const pkg = path.resolve(repoRoot, 'packages', 'react-quill-new');
const demoPublic = path.resolve(repoRoot, 'apps', 'demo', 'public');
const assetsDir = path.resolve(demoPublic, 'assets');

const filesToCopy = [
  {
    from: path.resolve(pkg, 'dist', 'react-quill.js'),
    to: path.resolve(assetsDir, 'react-quill.js'),
  },
  {
    from: path.resolve(pkg, 'dist', 'react-quill.js.map'),
    to: path.resolve(assetsDir, 'react-quill.js.map'),
  },
  {
    from: path.resolve(pkg, 'dist', 'quill.snow.css'),
    to: path.resolve(assetsDir, 'quill.snow.css'),
  },
  {
    from: path.resolve(pkg, 'dist', 'quill.bubble.css'),
    to: path.resolve(assetsDir, 'quill.bubble.css'),
  },
  {
    from: path.resolve(pkg, 'dist', 'quill.core.css'),
    to: path.resolve(assetsDir, 'quill.core.css'),
  },
  // Demo-only build of react-quill-new pinned to quill@1.3.7
  {
    from: path.resolve(repoRoot, 'packages', 'react-quill-new-quill1-demo', 'dist', 'react-quill.js'),
    to: path.resolve(assetsDir, 'react-quill-quill1.js'),
  },
  {
    from: path.resolve(repoRoot, 'packages', 'react-quill-new-quill1-demo', 'dist', 'react-quill.js.map'),
    to: path.resolve(assetsDir, 'react-quill-quill1.js.map'),
  },
];

fs.mkdirSync(assetsDir, { recursive: true });

for (const { from, to } of filesToCopy) {
  if (!fs.existsSync(from)) {
    // eslint-disable-next-line no-console
    console.warn(`[demo sync-assets] missing: ${from} (did you run the package build?)`);
    continue;
  }
  fs.copyFileSync(from, to);
}
