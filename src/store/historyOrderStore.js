import { normalApi } from '../api/apiService.js';
import { RESOURCE_BILL } from './../api/api.js';
const historyOrderStore = {
  namespaced: true,
  state: {
    bills: [],
  },
  mutations: {
    setBills(state, bills) {
      state.bills = bills;
    },
    removeAnItem(state, id) {
      state.bills = state.bills.filter(item => item.id !== id);
    },
  },
  actions: {
    async index({ commit }) {
      const result = await normalApi.post(`${RESOURCE_BILL}/user`);
      commit('setBills', result.data);
    },
    async show({ commit }, id) {
      const result = await normalApi.get(`${RESOURCE_BILL}/${id}`);
      commit('setCategory', result.data[0]);
    },
    async destroy({ commit }, id) {
      const result = await normalApi.delete(`${RESOURCE_BILL}/${id}`);
      commit('removeAnItem', id);
      return result.data;
    },
  },
};
export default historyOrderStore;
