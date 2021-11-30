import Vue from 'vue';
import Vuex from 'vuex';
import cartStore from './cartStore';
import productStore from './productStore';
import userStore from './userStore';
import categoryStore from './categoryStore';
import slideStore from './slideStore';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cart: cartStore,
    user: userStore,
    product: productStore,
    category: categoryStore,
    slide: slideStore,
  },
});
export { store as default };
