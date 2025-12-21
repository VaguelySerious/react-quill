/*
Demo-only build of ReactQuillNew against Quill 1.3.7.
This is intentionally NOT published.
*/

import { isEqual } from 'lodash-es';
import React, { createRef } from 'react';

import Quill, { type EmitterSource, type Range as RangeStatic } from 'quill';

export { Quill };
export type { EmitterSource, RangeStatic };

namespace ReactQuillNS {
  export type Value = string | any;
  export type Range = RangeStatic | null;

  export interface ReactQuillProps {
    bounds?: string | HTMLElement;
    children?: React.ReactElement<any>;
    className?: string;
    defaultValue?: Value;
    formats?: string[];
    id?: string;
    modules?: any;
    onChange?(value: string, delta: any, source: EmitterSource, editor: UnprivilegedEditor): void;
    onChangeSelection?(selection: Range, source: EmitterSource, editor: UnprivilegedEditor): void;
    onFocus?(selection: Range, source: EmitterSource, editor: UnprivilegedEditor): void;
    onBlur?(previousSelection: Range, source: EmitterSource, editor: UnprivilegedEditor): void;
    onKeyDown?: React.EventHandler<any>;
    onKeyPress?: React.EventHandler<any>;
    onKeyUp?: React.EventHandler<any>;
    placeholder?: string;
    preserveWhitespace?: boolean;
    readOnly?: boolean;
    style?: React.CSSProperties;
    tabIndex?: number;
    theme?: string;
    value?: Value;
  }

  export interface UnprivilegedEditor {
    getLength: Quill['getLength'];
    getText: Quill['getText'];
    getHTML: () => string;
    getBounds: Quill['getBounds'];
    getSelection: Quill['getSelection'];
    getContents: Quill['getContents'];
  }
}

type Value = ReactQuillNS.Value;
type Range = ReactQuillNS.Range;
type ReactQuillProps = ReactQuillNS.ReactQuillProps;
type UnprivilegedEditor = ReactQuillNS.UnprivilegedEditor;

interface ReactQuillState {
  generation: number;
}

function getSemanticHTMLCompat(editor: any): string {
  return typeof editor.getSemanticHTML === 'function' ? editor.getSemanticHTML() : editor.root.innerHTML;
}

class ReactQuill extends React.Component<ReactQuillProps, ReactQuillState> {
  editingAreaRef = createRef<any>();
  containerRef = createRef<any>();

  static displayName = 'React Quill';
  static Quill = Quill;

  dirtyProps: (keyof ReactQuillProps)[] = ['modules', 'formats', 'bounds', 'theme', 'children'];

  cleanProps: (keyof ReactQuillProps)[] = [
    'id',
    'className',
    'style',
    'placeholder',
    'tabIndex',
    'onChange',
    'onChangeSelection',
    'onFocus',
    'onBlur',
    'onKeyPress',
    'onKeyDown',
    'onKeyUp',
  ];

  static defaultProps = {
    theme: 'snow',
    modules: {},
    readOnly: false,
  };

  state: ReactQuillState = { generation: 0 };
  editor?: any;
  value: Value;
  selection: Range = null;
  lastDeltaChangeSet?: any;
  regenerationSnapshot?: { delta: any; selection: Range };
  unprivilegedEditor?: UnprivilegedEditor;

  constructor(props: ReactQuillProps) {
    super(props);
    const value = this.isControlled() ? props.value : props.defaultValue;
    this.value = value ?? '';
  }

  validateProps(props: ReactQuillProps): void {
    if (React.Children.count(props.children) > 1)
      throw new Error('The Quill editing area can only be composed of a single React element.');

    if (React.Children.count(props.children)) {
      const child = React.Children.only(props.children);
      if ((child as any)?.type === 'textarea')
        throw new Error('Quill does not support editing on a <textarea>. Use a <div> instead.');
    }

    if (this.lastDeltaChangeSet && props.value === this.lastDeltaChangeSet)
      throw new Error(
        'You are passing the `delta` object from the `onChange` event back ' +
          'as `value`. You most probably want `editor.getContents()` instead.'
      );
  }

  shouldComponentUpdate(nextProps: ReactQuillProps, nextState: ReactQuillState) {
    this.validateProps(nextProps);
    if (!this.editor || this.state.generation !== nextState.generation) return true;

    if ('value' in nextProps) {
      const prevContents = this.getEditorContents();
      const nextContents = nextProps.value ?? '';
      if (!this.isEqualValue(nextContents, prevContents)) {
        this.setEditorContents(this.editor, nextContents);
      }
    }

    if (nextProps.readOnly !== this.props.readOnly) {
      this.setEditorReadOnly(this.editor, !!nextProps.readOnly);
    }

    return [...this.cleanProps, ...this.dirtyProps].some((prop) => !isEqual(nextProps[prop], this.props[prop]));
  }

  shouldComponentRegenerate(nextProps: ReactQuillProps): boolean {
    return this.dirtyProps.some((prop) => !isEqual(nextProps[prop], this.props[prop]));
  }

  componentDidMount() {
    this.instantiateEditor();
    this.setEditorContents(this.editor!, this.getEditorContents());
  }

  componentWillUnmount() {
    this.destroyEditor();
  }

  componentDidUpdate(prevProps: ReactQuillProps, prevState: ReactQuillState) {
    if (this.editor && this.shouldComponentRegenerate(prevProps)) {
      const delta = this.editor.getContents();
      const selection = this.editor.getSelection();
      this.regenerationSnapshot = { delta, selection };
      this.setState({ generation: this.state.generation + 1 });
      this.destroyEditor();
    }

    if (this.state.generation !== prevState.generation) {
      const { delta, selection } = this.regenerationSnapshot!;
      delete this.regenerationSnapshot;
      this.instantiateEditor();
      const editor = this.editor!;
      editor.setContents(delta);
      postpone(() => this.setEditorSelection(editor, selection));
    }
  }

  instantiateEditor(): void {
    if (this.editor) this.hookEditor(this.editor);
    else this.editor = this.createEditor(this.getEditingArea(), this.getEditorConfig());
  }

  destroyEditor(): void {
    if (!this.editor) return;
    this.unhookEditor(this.editor);
    delete this.editor;
  }

  isControlled(): boolean {
    return 'value' in this.props;
  }

  getEditorConfig(): any {
    return {
      bounds: this.props.bounds,
      formats: this.props.formats,
      modules: this.props.modules,
      placeholder: this.props.placeholder,
      readOnly: this.props.readOnly,
      tabIndex: this.props.tabIndex,
      theme: this.props.theme,
    };
  }

  getEditor(): any {
    if (!this.editor) throw new Error('Accessing non-instantiated editor');
    return this.editor;
  }

  createEditor(element: HTMLElement, config: any) {
    const editor = new (Quill as any)(element, config);
    this.hookEditor(editor);
    return editor;
  }

  hookEditor(editor: any) {
    this.unprivilegedEditor = this.makeUnprivilegedEditor(editor);
    editor.on('editor-change', this.onEditorChange);
  }

  unhookEditor(editor: any) {
    editor.off('editor-change', this.onEditorChange);
  }

  getEditorContents(): Value {
    return this.value;
  }

  getEditorSelection(): Range {
    return this.selection;
  }

  isDelta(value: any): boolean {
    return value && value.ops;
  }

  isEqualValue(value: any, nextValue: any): boolean {
    if (this.isDelta(value) && this.isDelta(nextValue)) return isEqual(value.ops, nextValue.ops);
    return isEqual(value, nextValue);
  }

  setEditorContents(editor: any, value: Value) {
    this.value = value;
    const sel = this.getEditorSelection();
    if (typeof value === 'string') editor.setContents(editor.clipboard.convert(value));
    else editor.setContents(value);
    postpone(() => this.setEditorSelection(editor, sel));
  }

  setEditorSelection(editor: any, range: Range) {
    this.selection = range;
    if (range) editor.setSelection(range);
  }

  setEditorReadOnly(editor: any, value: boolean) {
    value ? editor.disable() : editor.enable();
  }

  makeUnprivilegedEditor(editor: any) {
    const e = editor;
    return {
      getHTML: () => e.root.innerHTML,
      getLength: e.getLength.bind(e),
      getText: e.getText.bind(e),
      getContents: e.getContents.bind(e),
      getSelection: e.getSelection.bind(e),
      getBounds: e.getBounds.bind(e),
    };
  }

  getEditingArea(): HTMLElement {
    const element = this.editingAreaRef.current;
    if (!element) throw new Error('Cannot find element for editing area');
    if (element.nodeType === 3) throw new Error('Editing area cannot be a text node');
    return element as HTMLElement;
  }

  renderEditingArea(): JSX.Element {
    const { children, preserveWhitespace } = this.props;
    const { generation } = this.state;

    if (React.Children.count(children)) {
      return React.cloneElement(React.Children.only(children)!, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        key: generation as any,
        ref: this.editingAreaRef,
      });
    }

    return preserveWhitespace ? (
      <pre key={generation} ref={this.editingAreaRef} />
    ) : (
      <div key={generation} ref={this.editingAreaRef} />
    );
  }

  render() {
    return (
      <div
        ref={this.containerRef}
        id={this.props.id}
        style={this.props.style}
        key={this.state.generation}
        className={`quill ${this.props.className ?? ''}`}
        onKeyPress={this.props.onKeyPress}
        onKeyDown={this.props.onKeyDown}
        onKeyUp={this.props.onKeyUp}
      >
        {this.renderEditingArea()}
      </div>
    );
  }

  onEditorChange = (eventName: any, rangeOrDelta: any, _old: any, source: any) => {
    if (eventName === 'text-change') {
      this.onEditorChangeText?.(getSemanticHTMLCompat(this.editor), rangeOrDelta, source, this.unprivilegedEditor!);
    } else if (eventName === 'selection-change') {
      this.onEditorChangeSelection?.(rangeOrDelta, source, this.unprivilegedEditor!);
    }
  };

  onEditorChangeText(value: string, delta: any, source: any, editor: UnprivilegedEditor): void {
    if (!this.editor) return;
    const nextContents = this.isDelta(this.value) ? editor.getContents() : value;
    if (nextContents !== this.getEditorContents()) {
      this.lastDeltaChangeSet = delta;
      this.value = nextContents;
      this.props.onChange?.(value, delta, source, editor);
    }
  }

  onEditorChangeSelection(nextSelection: any, source: any, editor: UnprivilegedEditor): void {
    if (!this.editor) return;
    const currentSelection = this.getEditorSelection();
    const hasGainedFocus = !currentSelection && nextSelection;
    const hasLostFocus = currentSelection && !nextSelection;
    if (isEqual(nextSelection, currentSelection)) return;
    this.selection = nextSelection;
    this.props.onChangeSelection?.(nextSelection, source, editor);
    if (hasGainedFocus) this.props.onFocus?.(nextSelection, source, editor);
    else if (hasLostFocus) this.props.onBlur?.(currentSelection, source, editor);
  }

  focus(): void {
    if (!this.editor) return;
    this.editor.focus();
  }

  blur(): void {
    if (!this.editor) return;
    this.selection = null;
    this.editor.blur();
  }
}

function postpone(fn: (value: void) => void) {
  Promise.resolve().then(fn);
}

export default ReactQuill;


