const Path = require('path');
const dir = (...args) => Path.resolve(__dirname, ...args);

module.exports = {
  mode: 'production',
  entry: dir('src/index.tsx'),

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
        exclude: /node_modules\/(?!react|react-dom)/,
      },
      {
        test: /\.(tsx|ts|js|jsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  output: {
    path: dir('dist'),
    filename: 'react-quill.js',
    library: 'ReactQuill',
    libraryTarget: 'global',
  },

  devServer: {
    contentBase: dir('dist'),
    stats: 'errors-only',
  },
};
