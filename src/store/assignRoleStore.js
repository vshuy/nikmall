import { normalApi } from '../api/apiService.js';
import router from './../router/router';
import { RESOURCE_ASSIGN_ROLE } from './../api/api.js';
const assignRoleStore = {
  namespaced: true,
  state: {
    assignRole: {},
    users: [],
    roles: [],
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setRoles(state, roles) {
      state.roles = roles;
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
      const result = await normalApi.get(`${RESOURCE_ASSIGN_ROLE}`);
      commit('setUsers', result.data);
    },
    async show({ commit }, id) {
      const result = await normalApi.get(`${RESOURCE_ASSIGN_ROLE}/${id}`);
      commit('setCategory', result.data[0]);
    },
    async update({ state }, id) {
      const result = await normalApi.put(
        `${RESOURCE_ASSIGN_ROLE}/${id}`,
        state.category,
      );
      router.go();
      return result.data;
    },
    async destroy({ commit }, id) {
      const result = await normalApi.delete(`${RESOURCE_ASSIGN_ROLE}/${id}`);
      commit('removeAnItem', id);
      return result.data;
    },
    async store({ state }) {
      const result = await normalApi.post(
        `${RESOURCE_ASSIGN_ROLE}`,
        state.category,
      );
      router.go();
      return result.data;
    },
  },
};
export default assignRoleStore;
