import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    carts: [],
    sum: 0.0,
    cart_status: false,
  },
  mutations: {
    addToCart(state, item) {
      // console.log('Info log cart: ~ item', item);
      state.carts.push(item);
      state.sum = state.carts.reduce(
        (previousValue, currentValue) => previousValue + currentValue.cost,
        0.0,
      );
    },
    removeAnItemFromCart(state, item_in) {
      state.carts = state.carts.filter(item => item !== item_in);
      state.sum = state.carts.reduce(
        (previousValue, currentValue) => previousValue + currentValue.cost,
        0.0,
      );
    },
    setStatus(state, status) {
      state.cart_status = status;
    },
  },
});
export { store as default };
