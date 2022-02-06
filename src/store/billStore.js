import { normalApi } from '../api/apiService.js';
import router from './../router/router';
import { RESOURCE_BILL, RESOURCE_BILL_STATUS } from './../api/api.js';
const billStore = {
  namespaced: true,
  state: {
    bill: [],
    bills: [],
    bill_status: [],
  },
  mutations: {
    setBill(state, bill) {
      state.bill = bill;
    },
    setBills(state, bills) {
      state.bills = bills;
    },
    setBillStatusForAnBill(state, e) {
      state.bill.bill.paid_status = e.target.value;
    },
    setBillStatus(state, bill_status) {
      state.bill_status = bill_status;
    },
    removeAnItem(state, id) {
      state.bills = state.bills.filter(item => item.id !== id);
    },
  },
  actions: {
    async index({ commit }) {
      const result = await normalApi.get(`${RESOURCE_BILL}`);
      commit('setBills', result.data);
    },
    async show({ commit }, id) {
      const result = await normalApi.get(`${RESOURCE_BILL}/${id}`);
      commit('setBill', result.data);
    },
    async update({ state }) {
      const result = await normalApi.put(
        `${RESOURCE_BILL}/${state.bill.bill.id}`,
        state.bill.bill,
      );
      router.go();
      return result.data;
    },
    async initStore({ commit }) {
      const result = await normalApi.get(`${RESOURCE_BILL_STATUS}`);
      commit('setBillStatus', result.data);
      // console.log('Log ~ initStore ~ result.data', result.data);
    },
  },
};
export default billStore;
