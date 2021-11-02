import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import Profile from '../views/auth/Profile.vue';
export const authRouter = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      resource: 'User',
      requiresAuth: {},
    },
    beforeEnter: (to, from, next) => {
      if (to.meta.requiresAuth) {
        next();
        console.log();
      } else {
        next({ name: 'login' });
      }
    },
  },
];
