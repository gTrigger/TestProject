import Vue from 'vue';
import Router from 'vue-router';

import Main from '../components/Layout/Main/Main.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/home',
    name: {
      name: 'home',
      className: 'ui-home',
    },
    component: Main,
  }
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
