/* eslint-disable import/extensions */
import * as eslintConfigAirbnbTypescriptBase from 'eslint-config-airbnb-typescript-base';
import * as tseslint from 'typescript-eslint';

import shared from './shared.js';

export default tseslint.config({
  extends: [eslintConfigAirbnbTypescriptBase, shared],
});
