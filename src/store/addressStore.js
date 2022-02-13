import { normalApi } from '../api/apiService.js';
import router from './../router/router';
import { RESOURCE_ADDRESS } from './../api/api.js';
const addressStore = {
  namespaced: true,
  state: {
    address: {
      id: '',
      user_id: '',
      name_address: '',
    },
    addresses: [],
  },
  mutations: {
    setAddress(state, address) {
      state.address = address;
    },
    setAddresses(state, addresses) {
      state.addresses = addresses;
    },
    setAddressName(state, e) {
      state.address.name_address = e.target.value;
    },
    removeAnItem(state, id) {
      state.addresses = state.addresses.filter(item => item.id !== id);
    },
  },
  actions: {
    async index({ commit }) {
      const result = await normalApi.get(`${RESOURCE_ADDRESS}`);
      commit('setAddresses', result.data[0].addresses);
    },
    async show({ commit }, id) {
      const result = await normalApi.get(`${RESOURCE_ADDRESS}/${id}`);
      commit('setAddress', result.data);
    },
    async update({ state }) {
      const result = await normalApi.put(
        `${RESOURCE_ADDRESS}/${state.address.id}`,
        state.address,
      );
      router.push('address-index');
      return result.data;
    },
    async destroy({ commit }, id) {
      const result = await normalApi.delete(`${RESOURCE_ADDRESS}/${id}`);
      commit('removeAnItem', id);
      return result.data;
    },
    async store({ state }) {
      const result = await normalApi.post(`${RESOURCE_ADDRESS}`, state.address);
      router.go();
      return result.data;
    },
  },
};
export default addressStore;
