import Vue from 'vue';

import Router from 'vue-router';
import ROUTE_NAMES from './route.names';
import guardHooks from './guardHooks/_export'

import LoginPage from '../components/Login/LoginForm/LoginForm.vue';
import CompanyList from '../components/Company/CompanyList/CompanyList.vue';
import CompanyPage from '../components/Company/CompanyPage/CompanyPage.vue';
import CompanyCreate from '../components/Company/CompanyCreate/CompanyCreate.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        redirect: 'companies'
    },
    {
        path: '/login',
        name: ROUTE_NAMES.LOGIN_PAGE.name,
        component: LoginPage
    },
    {
        path: '/companies',
        name: ROUTE_NAMES.COMPANY_LIST.name,
        component: CompanyList,
        beforeEnter: guardHooks.isAuthorized
    },
    {
        path: '/company/new',
        name: ROUTE_NAMES.COMPANY_CREATE.name,
        component: CompanyCreate,
        beforeEnter: guardHooks.isAuthorized
    },
    {
        path: '/company/:id',
        name: ROUTE_NAMES.COMPANY_PAGE.name,
        component: CompanyPage,
        beforeEnter: guardHooks.isAuthorized
    }
];

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
