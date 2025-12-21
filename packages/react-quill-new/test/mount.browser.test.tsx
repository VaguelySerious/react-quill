import React from 'react';
import { describe, expect, it } from 'vitest';
import ReactDOM from 'react-dom/client';

import ReactQuill from '../src/index';

describe('ReactQuill (browser)', () => {
  it('mounts and creates a Quill editor element', async () => {
    const host = document.createElement('div');
    document.body.appendChild(host);

    const root = ReactDOM.createRoot(host);
    root.render(<ReactQuill defaultValue="<p>hello</p>" theme="snow" />);

    // Let Quill mount.
    await new Promise((r) => setTimeout(r, 0));

    expect(host.querySelector('.ql-editor')).toBeTruthy();

    root.unmount();
    host.remove();
  });
});
