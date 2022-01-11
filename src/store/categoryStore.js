// import VueCookies from 'vue-cookies';
// import axios from 'axios';
import { normalApi } from '../api/apiService.js';
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
      const result = await normalApi.get(`${RESOURCE_CATEGORY}`);
      commit('setCategories', result.data);
    },
    async show({ commit }, id) {
      const result = await normalApi.get(`${RESOURCE_CATEGORY}/${id}`);
      commit('setCategory', result.data[0]);
    },
    async update({ state }, id) {
      const result = await normalApi.put(
        `${RESOURCE_CATEGORY}/${id}`,
        state.category,
      );
      router.go();
      return result.data;
    },
    async destroy({ commit }, id) {
      const result = await normalApi.delete(`${RESOURCE_CATEGORY}/${id}`);
      commit('removeAnItem', id);
      return result.data;
    },
    async store({ state }) {
      const result = await normalApi.post(
        `${RESOURCE_CATEGORY}`,
        state.category,
      );
      router.go();
      return result.data;
    },
  },
};
export default categoryStore;
