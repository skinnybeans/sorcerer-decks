import Vue from 'vue';
import Vuex from 'vuex';

import { packs } from './modules/packs';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    packs,
  },
});

export { store as default };
