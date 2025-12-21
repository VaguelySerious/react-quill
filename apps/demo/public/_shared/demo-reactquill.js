/* global React, ReactDOM, ReactQuill */
'use strict';

function mountReactQuill(rootEl, opts) {
  var Component = window.ReactQuill && window.ReactQuill.default;
  if (!Component) throw new Error('ReactQuill bundle not found on window.ReactQuill.default');

  function App() {
    return React.createElement(
      'div',
      null,
      React.createElement('h2', null, opts.title),
      React.createElement(
        'p',
        null,
        'This page mounts the global ',
        React.createElement('code', null, 'ReactQuill.default'),
        ' bundle.'
      ),
      React.createElement(Component, {
        theme: 'snow',
        defaultValue: '<p>Hello from ' + opts.title + '.</p>',
      })
    );
  }

  // React 18+ createRoot
  if (ReactDOM && typeof ReactDOM.createRoot === 'function') {
    var root = ReactDOM.createRoot(rootEl);
    root.render(React.createElement(React.StrictMode, null, React.createElement(App)));
    return;
  }

  // React 16/17 render
  if (ReactDOM && typeof ReactDOM.render === 'function') {
    ReactDOM.render(React.createElement(App), rootEl);
    return;
  }

  throw new Error('Unsupported ReactDOM API (expected createRoot or render).');
}


