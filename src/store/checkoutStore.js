import { normalApi } from '../api/apiService.js';
import { RESOURCE_BILL } from './../api/api.js';
import router from './../router/router';

const checkoutStore = {
  namespaced: true,
  state: {
    carts: [],
    bill: {
      total: 0,
      paid_status: 1,
      items: [],
    },
  },
  getters: {
    total_state(state) {
      state.bill.total = state.carts.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.cost * currentValue.quantity,
        0.0,
      );
      return state.bill.total;
    },
  },
  mutations: {
    setCarts(state, carts) {
      state.carts = carts;
    },
    setBillStatus(state, paid_status) {
      state.bill.paid_status = paid_status;
    },
    removeAnItem(state, id) {
      state.carts = state.carts.filter(item => item.id !== id);
    },
    createBill(state) {
      state.bill.items = state.carts.map(item => {
        const tmp = {
          bill_id: '',
          product_id: item.id,
          amounts: item.quantity,
        };
        return tmp;
      });
    },
  },
  actions: {
    async index({ commit }) {
      const carts = JSON.parse(localStorage.getItem('carts'));
      commit('setCarts', carts);
    },
    async store({ commit, state }) {
      commit('createBill');
      console.log(state.bill);
      const result = await normalApi.post(`${RESOURCE_BILL}`, state.bill);
      router.push('history-order-index');
      return result.data;
    },
  },
};
export default checkoutStore;
