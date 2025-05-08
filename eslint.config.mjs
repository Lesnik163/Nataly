import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:tailwindcss/recommended',
  ),
  {
    ignores: ['.next/', 'node_modules/'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'off',
      'no-console': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      'jsx-a11y/no-noninteractive-tabindex': 'off',
      'jsx-quotes': [2, 'prefer-single'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

export default eslintConfig;
