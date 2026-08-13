import React, { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
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

  it('preserves semantic non-breaking spaces by default', async () => {
    const host = document.createElement('div');
    document.body.appendChild(host);

    const onChange = vi.fn();
    const editorRef = createRef<ReactQuill>();
    const root = ReactDOM.createRoot(host);
    root.render(<ReactQuill ref={editorRef} onChange={onChange} />);

    await new Promise((resolve) => setTimeout(resolve, 0));
    editorRef.current!.getEditor().insertText(0, 'hello world', 'user');

    expect(onChange).toHaveBeenLastCalledWith(
      '<p>hello&nbsp;world</p>',
      expect.anything(),
      'user',
      expect.anything()
    );

    root.unmount();
    host.remove();
  });

  it('normalizes semantic spaces when requested', async () => {
    const host = document.createElement('div');
    document.body.appendChild(host);

    const onChange = vi.fn();
    const editorRef = createRef<ReactQuill>();
    const root = ReactDOM.createRoot(host);
    root.render(
      <ReactQuill ref={editorRef} onChange={onChange} normalizeSemanticSpaces />
    );

    await new Promise((resolve) => setTimeout(resolve, 0));
    editorRef.current!.getEditor().insertText(0, 'hello world', 'user');

    expect(onChange).toHaveBeenLastCalledWith(
      '<p>hello world</p>',
      expect.anything(),
      'user',
      expect.anything()
    );

    root.unmount();
    host.remove();
  });

  it('preserves ordered and unordered semantic lists while normalizing spaces', async () => {
    const host = document.createElement('div');
    document.body.appendChild(host);

    const onChange = vi.fn();
    const editorRef = createRef<ReactQuill>();
    const root = ReactDOM.createRoot(host);
    root.render(
      <ReactQuill ref={editorRef} onChange={onChange} normalizeSemanticSpaces />
    );

    await new Promise((resolve) => setTimeout(resolve, 0));
    const editor = editorRef.current!.getEditor();
    editor.insertText(0, 'ordered item\nbullet item', 'user');
    editor.formatLine(0, 1, 'list', 'ordered', 'user');
    editor.formatLine(13, 1, 'list', 'bullet', 'user');

    expect(onChange).toHaveBeenLastCalledWith(
      '<ol><li>ordered item</li></ol><ul><li>bullet item</li></ul>',
      expect.anything(),
      'user',
      expect.anything()
    );

    root.unmount();
    host.remove();
  });
});
