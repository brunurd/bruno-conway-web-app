const globals = require('globals');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptEslintParser = require('@typescript-eslint/parser');
const pluginSecurity = require('eslint-plugin-security');
const pluginImport = require('eslint-plugin-import');
const pluginReact = require('eslint-plugin-react');
const pluginReactHooks = require('eslint-plugin-react-hooks');
const pluginJsxA11y = require('eslint-plugin-jsx-a11y');

const IGNORES = [
  'node_modules/*',
  'coverage/*',
  'public/*',
  '.jest/*',
  'dist/*',
  '.storybook/*',
];

const FILES = {
  tsConfig: [
    'config/**/*.{ts,mts,cts}',
  ],
  tsReact: ['src/**/*.{ts,tsx,mts,cts}'],
  js: [
    'src/**/*.{cjs,js}',
    'config/**/*.{cjs,js}',
  ],
  jsReact: ['src/**/*.{cjs,js,jsx}'],
};

const RULES = {
  ...pluginSecurity.configs.recommended.rules,
  'security/detect-object-injection': 'off',
  quotes: ['error', 'single'],
  semi: ['error', 'always'],
  'comma-dangle': ['error', 'always-multiline'],
  'eol-last': ['error', 'unix'],
};

const config = [
  {
    files: [...FILES.tsReact, ...FILES.jsReact],
    ignores: IGNORES,
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      import: pluginImport,
      typescriptEslintPlugin,
      'jsx-a11y': pluginJsxA11y,
      'security': pluginSecurity.configs.recommended.plugins.security,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es6,
        ...globals.jest,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaFeatures: { module: true, jsx: true },
        project: './tsconfig.json',
      },
    },
    rules: RULES,
  },
  {
    files: [...FILES.tsConfig],
    ignores: IGNORES,
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      import: pluginImport,
      typescriptEslintPlugin,
      'security': pluginSecurity.configs.recommended.plugins.security,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.es6,
        ...globals.jest,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaFeatures: { module: true, jsx: false },
        project: './tsconfig.node.json',
      },
    },
    rules: RULES,
  },
  {
    files: [...FILES.js],
    ignores: IGNORES,
    plugins: {
      'security': pluginSecurity.configs.recommended.plugins.security,
    },
    rules: RULES,
  },
];

module.exports = config;
