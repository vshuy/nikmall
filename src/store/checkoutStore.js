import { normalApi } from '../api/apiService.js';
import { RESOURCE_BILL } from './../api/api.js';
import router from './../router/router';
import { RESOURCE_ADDRESS } from './../api/api.js';

const checkoutStore = {
  namespaced: true,
  state: {
    carts: [],
    bill: {
      total: 0,
      paid_status: 1,
      items: [],
      address_id: '',
    },
    addresses: [],
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
    setAddresses(state, addresses) {
      state.addresses = addresses;
    },
    setAddressId(state, e) {
      state.bill.address_id = e.target.value;
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
      const result = await normalApi.get(`${RESOURCE_ADDRESS}`);
      commit('setAddresses', result.data[0].addresses);
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
