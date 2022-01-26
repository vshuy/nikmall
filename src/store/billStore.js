import { normalApi } from '../api/apiService.js';
import router from './../router/router';
import { RESOURCE_BILL, RESOURCE_BILL_STATUS } from './../api/api.js';
const billStore = {
  namespaced: true,
  state: {
    bills: [],
    bill_status: [],
  },
  mutations: {
    setBills(state, bills) {
      state.bills = bills;
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
      commit('setCategory', result.data[0]);
    },
    async update({ state }, id) {
      const result = await normalApi.put(
        `${RESOURCE_BILL}/${id}`,
        state.category,
      );
      router.go();
      return result.data;
    },
    async destroy({ commit }, id) {
      const result = await normalApi.delete(`${RESOURCE_BILL}/${id}`);
      commit('removeAnItem', id);
      return result.data;
    },
    async store({ state }) {
      const result = await normalApi.post(`${RESOURCE_BILL}`, state.category);
      router.go();
      return result.data;
    },
    async initStore({ commit }) {
      const result = await normalApi.get(`${RESOURCE_BILL_STATUS}`);
      commit('setBillStatus', result.data);
      console.log('Log ~ initStore ~ result.data', result.data);
    },
  },
};
export default billStore;
