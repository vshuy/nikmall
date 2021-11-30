const axios = require('axios');
import VueCookies from 'vue-cookies';
import router from './../router/router';
import { RESOURCE_CATEGORY } from './../api/api.js';
const categoryStore = {
  namespaced: true,
  state: {
    category: {
      id: '',
      type_product: '',
      descripe: '',
    },
    categories: [],
  },
  mutations: {
    setCategory(state, category) {
      state.category = category;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setName(state, e) {
      state.category.type_product = e.target.value;
    },
    setDescribe(state, e) {
      state.category.descripe = e.target.value;
    },
    removeAnItem(state, id) {
      state.categories = state.categories.filter(item => item.id !== id);
    },
  },
  actions: {
    async index({ commit }) {
      const result = await axios.get(`${RESOURCE_CATEGORY}`, {
        headers: {
          Authorization: VueCookies.get('token'),
        },
      });
      commit('setCategories', result.data);
    },
    async show({ commit }, id) {
      const result = await axios.get(`${RESOURCE_CATEGORY}/${id}`, {
        headers: {
          Authorization: VueCookies.get('token'),
        },
      });
      commit('setCategory', result.data[0]);
    },
    async update({ state }, id) {
      const result = await axios.put(
        `${RESOURCE_CATEGORY}/${id}`,
        state.category,
        {
          headers: {
            Authorization: VueCookies.get('token'),
          },
        },
      );
      router.go();
      return result.data;
    },
    async destroy({ commit }, id) {
      const result = await axios.delete(`${RESOURCE_CATEGORY}/${id}`, {
        headers: {
          Authorization: VueCookies.get('token'),
        },
      });
      commit('removeAnItem', id);
      return result.data;
    },
    async store({ state }) {
      const result = await axios.post(
        `${RESOURCE_CATEGORY}`,
        state.category,
        {
          headers: {
            Authorization: VueCookies.get('token'),
          },
        },
      );
      router.go();
      return result.data;
      
    },
  },
};
export default categoryStore;
