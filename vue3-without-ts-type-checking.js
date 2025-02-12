/* eslint-disable import/extensions */
import withoutTsTypeChecking from 'eslint-config-airbnb-typescript-base/without-ts-type-checking.js';
import * as tseslint from 'typescript-eslint';

import sharedVue3 from './shared-vue3.js';

export default tseslint.config({
  extends: [withoutTsTypeChecking, sharedVue3],
});
