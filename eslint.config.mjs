import globals from 'globals';
import pluginJs from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  languageOptions: { globals: globals.browser },
  recommendedConfig: pluginJs.configs.recommended,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...compat.config({
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
    extends: ['eslint:recommended', 'prettier', 'plugin:@next/next/recommended'],
  }),
];
