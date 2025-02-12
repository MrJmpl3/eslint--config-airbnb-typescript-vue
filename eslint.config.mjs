/* eslint-disable import/extensions,import/no-extraneous-dependencies */
import eslintConfigPrettier from 'eslint-config-prettier';
import * as tseslint from 'typescript-eslint';

import vue3WithoutTsTypeChecking from './vue3-without-ts-type-checking.js';

export default tseslint.config(
  {
    ignores: ['/node_modules/**', '/.pnpm-store/**'],
  },
  { extends: [vue3WithoutTsTypeChecking] },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  { extends: [eslintConfigPrettier] },
);
