import OrderShow from '../views/historyOrder/OrderShow.vue';
import OrderIndex from '../views/historyOrder/OrderIndex.vue';
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
      const isLogin = localStorage.status_login;
      if (isLogin === 'true') {
        next();
      } else {
        next({ name: 'login' });
      }
    },
  },
];
