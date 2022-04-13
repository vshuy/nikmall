import AddressIndex from '../views/address/AddressIndex.vue';
import AddressEdit from '../views/address/AddressEdit.vue';
import AppCookie from '../helpers/AppCookie';
export const addressRouter = [
  {
    path: '/address-index',
    name: 'address-index',
    component: AddressIndex,
    beforeEnter: (to, from, next) => {
      AppCookie.redirectIfNotLogin();
      next();
    },
  },
  {
    path: '/address-edit',
    name: 'address-edit',
    component: AddressEdit,
    beforeEnter: (to, from, next) => {
      AppCookie.redirectIfNotLogin();
      next();
    },
  },
];
