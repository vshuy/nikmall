const cartStore = {
  namespaced: true,
  state: {
    carts: [],
    sum: 0.0,
    cart_status: false,
  },
  getters: {
    total_state(state) {
      return state.carts.reduce(
        (previousValue, currentValue) => previousValue + currentValue.cost,
        0.0,
      );
    },
  },
  mutations: {
    addToCart(state, item) {
      if (state.carts.includes(item) === false) {
        state.carts.push(item);
      }
    },
    removeAnItemFromCart(state, item_in) {
      state.carts = state.carts.filter(item => item !== item_in);
    },
    setStatus(state, status) {
      state.cart_status = status;
    },
  },
};
export default cartStore;
