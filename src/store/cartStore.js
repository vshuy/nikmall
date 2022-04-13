import Vue from 'vue';
import AppNotification from '../helpers/AppNotification';
const cartStore = {
  namespaced: true,
  state: {
    carts: [],
    id_items_exist: [],
    sum: 0.0,
    cart_status: false,
  },
  getters: {
    total_state(state) {
      return state.carts.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.cost * currentValue.quantity,
        0.0,
      );
    },
  },
  mutations: {
    addToCart(state, item) {
      if (state.id_items_exist.includes(item.id) === false) {
        state.id_items_exist.push(item.id);
        item['quantity'] = 1;
        state.carts.push(item);
      }
      AppNotification.notifyAddAnItemToCartSuccess();
    },
    removeAnItemFromCart(state, item_in) {
      state.carts = state.carts.filter(item => item !== item_in);
      state.id_items_exist = state.id_items_exist.filter(
        item => item !== item_in.id,
      );
      AppNotification.notifyRemoveAnItemFromCartSuccess();
    },
    plusItem(state, item) {
      let index = state.carts.indexOf(item);
      state.carts[index].quantity = state.carts[index].quantity + 1;
      Vue.set(state.carts, index, state.carts[index]);
    },
    minusItem(state, item) {
      let index = state.carts.indexOf(item);
      if (state.carts[index].quantity > 1) {
        state.carts[index].quantity = state.carts[index].quantity - 1;
        Vue.set(state.carts, index, state.carts[index]);
      }
    },
    setStatus(state, status) {
      state.cart_status = status;
    },
  },
};
export default cartStore;
