### ReactQuillNew (`react-quill-new`)

A maintained **drop-in React component** wrapper around **Quill 2.x**.

### Why use this instead of “just Quill”?

Quill has a React playground ([Quill React playground](https://quilljs.com/playground/react)), but Quill itself does **not** ship a maintained, backwards-compatible React component.

- **Drop-in React component**: you get `<ReactQuill />` with a stable prop/event API.
- **Bridges React + Quill lifecycles**: mounts/unmounts Quill correctly and recreates the editor when “dirty props” change (`modules`, `formats`, `theme`, etc).
- **Controlled + uncontrolled support**: supports `value` and `defaultValue`, with the documented “hybrid controlled” behavior Quill requires.
- **Delta + HTML support**: accepts either HTML strings or Delta-like values, and guards against the common “use event delta as value” infinite loop.
- **Safe editor access**: event handlers receive an “unprivileged editor” proxy; advanced usage can use `ref.getEditor()` to get the real Quill instance.
- **Browser bundle**: ships `dist/react-quill.js` for simple `<script>` usage.

### Install

```bash
pnpm add react-quill-new
```

### Quick start (React)

```jsx
import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

export function Editor() {
  const [value, setValue] = useState('');
  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}
```

### Using Deltas (important)

- **Don’t** feed the `delta` argument from `onChange` back into `value`.
- **Do** use `editor.getContents()` if you want a Delta for state.

### Browser bundle (no build step)

- **CSS**: include `quill.snow.css` (or `quill.bubble.css`) from this package.
- **JS**: include React + ReactDOM (UMD) and then `dist/react-quill.js`.

`dist/react-quill.js` exposes:

- **`window.ReactQuill.default`**: the React component
- **`window.ReactQuill.Quill`**: the bundled Quill constructor

### Demo

This repo contains a static multi-page demo under `apps/demo` with subpaths for different React/Quill combos.

### Repo development

This repository is a **pnpm + turborepo** monorepo.

```bash
pnpm install
pnpm build
pnpm test
```

### Releases

This repo uses **Changesets** + GitHub Actions.

- **Create a changeset**: `pnpm changeset`
- **Release PR / publish**: handled by `.github/workflows/release.yml` (requires `NPM_TOKEN` secret)


