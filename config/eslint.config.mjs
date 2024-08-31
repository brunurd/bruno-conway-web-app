import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginSecurity from 'eslint-plugin-security';

export default [
  { ignores: ['dist/*', 'config/jest.polyfills.js'] },
  { files: ['src/**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { files: ['config/**/*.{ts,mjs}'] },
  { files: ['config/**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginSecurity.configs.recommended,
  {
    rules: {
      'security/detect-object-injection': 'off',
      'react/react-in-jsx-scope': 'off',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'eol-last': ['error', 'unix'],
    },
  },
];
