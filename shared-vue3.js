import eslintPluginVue from 'eslint-plugin-vue';
import * as tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [eslintPluginVue.configs['flat/recommended']],
  languageOptions: {
    parserOptions: {
      extraFileExtensions: ['.vue'],
    },
  },
});
