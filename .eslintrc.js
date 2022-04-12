module.exports = {
  env: {
    es2021: true,
    browser: true,
    es6: true
  },
  extends: ["airbnb", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint", "plugin:prettier/recommended", "plugin:storybook/recommended"],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 202,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react/sort-comp': 0,
    'react/jsx-filename-extension': [1, {
      extensions: ['.jsx', '.tsx']
    }],
    'react/no-unescaped-entities': 0,
    'react/require-default-props': 0,
    'react-hooks/exhaustive-deps': 0,
    'no-use-before-define': 0,
    'no-underscore-dangle': 0,
    'no-tabs': 0,
    'no-plusplus': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    indent: 'off',
    'class-methods-use-this': 0,
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/camelcase': 0,
    'jsx-a11y/media-has-caption': 0,
    'react/jsx-props-no-spreading': 0,
    'no-nested-ternary': 0,
    'react/no-danger': 0,
    'react/prop-types': 0
  }
};