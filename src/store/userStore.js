const axios = require('axios');
import VueCookies from 'vue-cookies';
import router from './../router/router';
import { RESOURCE_USER } from './../api/api.js';
import AppCookie from './../helpers/AppCookie.js';
const userStore = {
  namespaced: true,
  state: {
    name: '',
    email: '',
    password: '',
    user_id: '',
    information_process: '',
    status_login: '',
  },
  mutations: {
    initStatusLogin(state) {
      state.status_login = localStorage.status_login;
    },
    setEmail(state, e) {
      state.email = e.target.value;
    },
    setPassword(state, e) {
      state.password = e.target.value;
    },
  },
  actions: {
    async login({ state }) {
      const result = await axios.post(`${RESOURCE_USER}/login`, {
        email: state.email,
        password: state.password,
      });
      if (result.data.status === true) {
        AppCookie.setLoginCookie(result.data);
        state.information_process = 'Login success';
        if (result.data.user_if.id === 1) {
          router.push('/dashboardproduct');
        } else {
          router.push('/');
        }
      } else {
        state.information_process = 'Login failse';
        AppCookie.destroyCookie();
      }
    },
    async logout({ state }) {
      const result = await axios.post(
        `${RESOURCE_USER}/logout`,
        {},
        {
          headers: {
            Authorization: VueCookies.get('token'),
          },
        },
      );
      AppCookie.destroyCookie();
      state.status_login = false;
      return result.data;
    },
    async register() {},
    async profile() {},
  },
};
export default userStore;
