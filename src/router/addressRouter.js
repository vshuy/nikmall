import AddressIndex from '../views/address/AddressIndex.vue';
import AddressEdit from '../views/address/AddressEdit.vue';
export const addressRouter = [
  {
    path: '/address-index',
    name: 'address-index',
    component: AddressIndex,
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
    path: '/address-edit',
    name: 'address-edit',
    component: AddressEdit,
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
