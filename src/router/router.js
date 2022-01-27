import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '../views/Home.vue';
import Checkout from '../components/Checkout.vue';
import OrderIndex from '../views/historyOrder/OrderIndex.vue';
import Dashboard from '../components/Dashboard.vue';
import paypal from '../views/Paypal.vue';
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
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/detailcart',
      name: 'detailcart',
      component: Checkout,
      beforeEnter: (to, from, next) => {
        const isLogin = localStorage.status_login;
        if (isLogin === 'true') {
          next();
        } else {
          next({ name: 'login' });
        }
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/listorder',
      name: 'listorder',
      component: OrderIndex,
      beforeEnter: (to, from, next) => {
        const isLogin = localStorage.status_login;
        if (isLogin === 'true') {
          next();
        } else {
          next({ name: 'login' });
        }
      },
    },
    {
      path: '/paypal',
      name: 'paypal',
      component: paypal,
    },
  ],
});
