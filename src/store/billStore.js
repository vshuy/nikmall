import { normalApi } from '../api/apiService.js';
import router from './../router/router';
import { RESOURCE_BILL, RESOURCE_BILL_STATUS, BASE_URL } from './../api/api.js';
const billStore = {
  namespaced: true,
  state: {
    bill_statistic: {},
    bill: [],
    bills: [],
    bill_status: [],
  },
  mutations: {
    setBillStatistic(state, statistic) {
      state.bill_statistic = statistic;
    },
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
    async getBillStatistic({ commit }) {
      const result = await normalApi.get(`${BASE_URL}/api/get-bill-statistic`);
      commit('setBillStatistic', result.data);
    },
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
