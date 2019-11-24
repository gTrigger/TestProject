import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth/_export';
import company from './modules/company/_export';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    company
  }
})
