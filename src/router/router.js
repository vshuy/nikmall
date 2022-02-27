import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '../views/Home.vue';
import Checkout from '../components/Checkout.vue';
import Dashboard from '../components/Dashboard.vue';
import paypal from '../views/Paypal.vue';
import AppCookie from '../helpers/AppCookie';
import { productRouter } from './productRouter.js';
import { authRouter } from './authRouter.js';
import { categoryRouter } from './categoryRouter.js';
import { postCategoryRouter } from './postCategoryRouter.js';
import { slideRouter } from './slideRouter.js';
import { billRouter } from './billRouter';
import { postRouter } from './postRouter';
import { roleRouter } from './roleRouter';
import { permissionRouter } from './permissionRouter';
import { assignRoleRouter } from './assignRoleRouter';
import { historyOrderRouter } from './historyOrderRouter';
import { addressRouter } from './addressRouter';
Vue.use(VueRouter);
export default new VueRouter({
  // mode: 'history',
  routes: [
    ...productRouter,
    ...authRouter,
    ...categoryRouter,
    ...postCategoryRouter,
    ...slideRouter,
    ...billRouter,
    ...postRouter,
    ...roleRouter,
    ...permissionRouter,
    ...assignRoleRouter,
    ...historyOrderRouter,
    ...addressRouter,
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cart-show',
      name: 'cart-show',
      component: Checkout,
      beforeEnter: (to, from, next) => {
        AppCookie.redirectIfNotLogin();
        next();
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },

    {
      path: '/paypal',
      name: 'paypal',
      component: paypal,
    },
  ],
});
