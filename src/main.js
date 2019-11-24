import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store';

import './assets/styles/styles.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faPhoneAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faPhoneAlt,
    faEnvelope
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app');
