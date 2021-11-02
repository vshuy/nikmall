import Vue from 'vue';
import Vuex from 'vuex';
import cartStore from './cartStore';
import userStore from './userStore';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cart: cartStore,
    user: userStore,
  },
});
export { store as default };
