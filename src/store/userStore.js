const axios = require('axios');
import Vue from 'vue';
import router from './../router/router';
import { RESOURCE_USER } from './../api/api.js';
import AppCookie from './../helpers/AppCookie.js';
import { normalApi } from '../api/apiService';
const userStore = {
  namespaced: true,
  state: {
    name: '',
    email: '',
    password: '',
    phone: '',
    user_id: '',
    errors_response: [],
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
    setName(state, e) {
      state.name = e.target.value;
    },
    setPhone(state, e) {
      state.phone = e.target.value;
    },
    reFreshStatus(state) {
      state.errors_response = [];
      state.information_process = '';
      state.name = '';
      state.email = '';
      state.password = '';
    },
  },
  actions: {
    async login({ state }) {
      const result = await axios.post(`${RESOURCE_USER}/login`, state);
      if (result.data.status === true) {
        AppCookie.setLoginCookie(result.data, state.email);
        state.information_process = 'Login success';
        if (result.data.user_if.id === 1) {
          Vue.notify({
            group: 'notify-group',
            title: 'Notification login',
            text:
              'Login success,Welcome admin you will be redirect to dashboard page after two seconds',
            type: 'success',
            closeOnClick: true,
          });
          setTimeout(function() {
            router.push('/dashboard');
          }, 2000);
        } else {
          Vue.notify({
            group: 'notify-group',
            title: 'Notification login',
            text:
              'Login success, you will be redirect to home page after two seconds',
            type: 'success',
            closeOnClick: true,
          });
          setTimeout(function() {
            router.push('/');
          }, 2000);
        }
      } else {
        state.information_process = 'Login failed';
        state.errors_response = result.data.error;
        console.log(
          'Log ~ login ~ state.errors_response',
          state.errors_response,
        );
        Vue.notify({
          group: 'notify-group',
          title: 'Login messenger',
          text: 'Login fail',
          type: 'error',
          closeOnClick: true,
        });
        AppCookie.destroyCookie();
      }
    },
    async register({ state }) {
      const result = await axios.post(`${RESOURCE_USER}/register`, state);
      console.log('Log ~ register ~ result.data', result.data);
      if (result.data.success === true) {
        state.information_process = 'Register success';
        Vue.notify({
          group: 'notify-group',
          title: 'Notification login',
          text:
            'Register success, you will be redirect to login page after two seconds',
          type: 'success',
          closeOnClick: true,
        });
        setTimeout(function() {
          router.push('/login');
        }, 2000);
      } else {
        state.information_process = 'Register fail';
        Vue.notify({
          group: 'notify-group',
          title: 'Register notification',
          text: 'Register fail please check again',
          type: 'error',
          closeOnClick: true,
        });
        state.errors_response = result.data.error;
      }
    },
    async logout({ state }) {
      const result = await normalApi.post(`${RESOURCE_USER}/logout`);
      AppCookie.destroyCookie();
      state.status_login = false;
      Vue.notify({
        group: 'notify-group',
        title: 'Logout notification',
        text: 'Logout successful',
        type: 'success',
        closeOnClick: true,
      });
      return result.data;
    },
    async profile() {},
  },
};
export default userStore;
