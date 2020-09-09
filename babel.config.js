/** @type { import('@babel/core').TransformOptions } */
const options = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // export * as ns from "mod"
    ['@babel/plugin-proposal-export-namespace-from'],
    // path aliases
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '~': './src',
          '@test': './__test__',
          '@': './',
        },
      },
    ],
  ],
};

module.exports = options;
