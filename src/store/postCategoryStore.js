import router from './../router/router';
import { RESOURCE_POST_CATEGORY } from './../api/api.js';
import { normalApi } from '../api/apiService';
const postCategoryStore = {
  namespaced: true,
  state: {
    category: {
      id: '',
      name: '',
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
      state.category.name = e.target.value;
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
      const result = await normalApi.get(`${RESOURCE_POST_CATEGORY}`);
      commit('setCategories', result.data);
    },
    async show({ commit }, id) {
      const result = await normalApi.get(`${RESOURCE_POST_CATEGORY}/${id}`);
      commit('setCategory', result.data);
    },
    async update({ state }, id) {
      const result = await normalApi.put(
        `${RESOURCE_POST_CATEGORY}/${id}`,
        state.category,
      );
      router.go();
      return result.data;
    },
    async destroy({ commit }, id) {
      const result = await normalApi.delete(`${RESOURCE_POST_CATEGORY}/${id}`);
      commit('removeAnItem', id);
      return result.data;
    },
    async store({ state }) {
      const result = await normalApi.post(
        `${RESOURCE_POST_CATEGORY}`,
        state.category,
      );
      router.go();
      return result.data;
    },
  },
};
export default postCategoryStore;
