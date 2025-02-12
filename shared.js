import eslintPluginVue from 'eslint-plugin-vue';
import * as tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [eslintPluginVue.configs['flat/vue2-recommended']],
  languageOptions: {
    parserOptions: {
      extraFileExtensions: ['.vue'],
    },
  },
});
