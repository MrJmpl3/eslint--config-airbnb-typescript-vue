/* eslint-disable import/extensions */
import * as eslintConfigAirbnbTypescriptBase from 'eslint-config-airbnb-typescript-base';
import * as tseslint from 'typescript-eslint';

import sharedVue3 from './shared-vue3.js';

export default tseslint.config({
  extends: [eslintConfigAirbnbTypescriptBase, sharedVue3],
});
