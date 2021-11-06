import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '../views/Home.vue';
import CartDetail from '../views/CartDetail.vue';
import ListOrdered from '../views/historyorder/ListOrdered.vue';
import paypal from '../views/Paypal.vue';
import { productRouter } from './productRouter.js';
import { authRouter } from './authRouter.js';
import { categoryRouter } from './categoryRouter.js';
import { slideRouter } from './slideRouter.js';
import { billRouter } from './billRouter';
Vue.use(VueRouter);
export default new VueRouter({
  // mode: 'history',
  routes: [
    ...productRouter,
    ...authRouter,
    ...categoryRouter,
    ...slideRouter,
    ...billRouter,
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/detailcart',
      name: 'detailcart',
      component: CartDetail,
    },

    {
      path: '/listorder',
      name: 'listorder',
      component: ListOrdered,
    },
    {
      path: '/paypal',
      name: 'paypal',
      component: paypal,
    },
  ],
});
