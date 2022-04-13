import OrderShow from '../views/historyOrder/OrderShow.vue';
import OrderIndex from '../views/historyOrder/OrderIndex.vue';
import AppCookie from '../helpers/AppCookie';
export const historyOrderRouter = [
  {
    path: '/history-order-show/:id',
    name: 'history-order-show',
    component: OrderShow,
  },
  {
    path: '/history-order-index',
    name: 'history-order-index',
    component: OrderIndex,
    beforeEnter: (to, from, next) => {
      AppCookie.redirectIfNotLogin();
      next();
    },
  },
];
