const axios = require('axios');
import VueCookies from 'vue-cookies';
import router from './../router/router';
import { RESOURCE_POST_CATEGORY } from './../api/api.js';
const postCategoryStore = {
  namespaced: true,
  state: {
    category: {
      id: '',
      type_product: '',
      describe: '',
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
      state.category.describe = e.target.value;
    },
    removeAnItem(state, id) {
      state.categories = state.categories.filter(item => item.id !== id);
    },
  },
  actions: {
    async index({ commit }) {
      const result = await axios.get(`${RESOURCE_POST_CATEGORY}`, {
        headers: {
          Authorization: VueCookies.get('token'),
        },
      });
      commit('setCategories', result.data);
    },
    async show({ commit }, id) {
      const result = await axios.get(`${RESOURCE_POST_CATEGORY}/${id}`, {
        headers: {
          Authorization: VueCookies.get('token'),
        },
      });
      commit('setCategory', result.data[0]);
    },
    async update({ state }, id) {
      const result = await axios.put(
        `${RESOURCE_POST_CATEGORY}/${id}`,
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
      const result = await axios.delete(`${RESOURCE_POST_CATEGORY}/${id}`, {
        headers: {
          Authorization: VueCookies.get('token'),
        },
      });
      commit('removeAnItem', id);
      return result.data;
    },
    async store({ state }) {
      const result = await axios.post(
        `${RESOURCE_POST_CATEGORY}`,
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
export default postCategoryStore;
