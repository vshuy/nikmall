import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '../views/Home.vue';
import CartDetail from '../views/CartDetail.vue';
import ListOrdered from '../views/historyorder/ListOrdered.vue';
import Dashboard from '../components/Dashboard.vue'
import paypal from '../views/Paypal.vue';
import { productRouter } from './productRouter.js';
import { authRouter } from './authRouter.js';
import { categoryRouter } from './categoryRouter.js';
import { postCategoryRouter } from './postCategoryRouter.js';
import { slideRouter } from './slideRouter.js';
import { billRouter } from './billRouter';
import { postRouter } from './postRouter';
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
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/detailcart',
      name: 'detailcart',
      component: CartDetail,
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
      component: ListOrdered,
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
