const axios = require('axios');
import VueCookies from 'vue-cookies';
import { RESOURCE_PRODUCT } from './../api/api.js';
const productStore = {
  namespaced: true,
  state: {
    product: {},
    products: {},
  },
  mutations: {
    setProduct(state, product) {
      state.product = product;
    },
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async index({ commit }, page) {
      if (typeof page === 'undefined') {
        page = 1;
      }
      const result = await axios.get(`${RESOURCE_PRODUCT}/pg?page=${page}`, {
        headers: {
          Authorization: VueCookies.get('token'),
        },
      });
      commit('setProducts', result.data);
    },
    async show({ commit }, id) {
      const result = await axios.get(`${RESOURCE_PRODUCT}/${id}`);
      commit('setProduct', result.data);
    },
  },
};
export default productStore;
