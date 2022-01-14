import { normalApi } from '../api/apiService.js';
import router from './../router/router';
import { RESOURCE_ROLE, BASE_URL } from './../api/api.js';
const roleStore = {
  namespaced: true,
  state: {
    role: {
      name: '',
      permissions: [],
    },
    roles: [],
    permissions: [],
  },
  mutations: {
    setRole(state, role) {
      state.role = role;
    },
    setNameRole(state, e) {
      state.role.name = e.target.value;
    },
    setRoles(state, roles) {
      state.roles = roles;
    },
    setPermissions(state, permissions) {
      state.permissions = permissions;
    },
    setRolePermissions(state, permissions) {
      state.role.permissions = permissions;
    },
  },
  actions: {
    async index({ commit }) {
      const result = await normalApi.get(`${RESOURCE_ROLE}`);
      commit('setRoles', result.data);
    },
    async show({ commit }, id) {
      const result = await normalApi.get(`${RESOURCE_ROLE}/${id}`);
      commit('setCategory', result.data[0]);
    },
    async create({ commit }) {
      const result = await normalApi.get(`${BASE_URL}/api/role-create`); //THIS IS AN ERROR WHEN BACK_END ROUTER DO NOT CATCH ROLE/CREATE URL
      commit('setPermissions', result.data);
    },
    async update({ state }, id) {
      const result = await normalApi.put(
        `${RESOURCE_ROLE}/${id}`,
        state.category,
      );
      router.go();
      return result.data;
    },
    async destroy({ commit }, id) {
      const result = await normalApi.delete(`${RESOURCE_ROLE}/${id}`);
      commit('removeAnItem', id);
      return result.data;
    },
    async store({ state, commit }, permissions) {
      commit('setRolePermissions', permissions);
      const result = await normalApi.post(`${RESOURCE_ROLE}`, state.role);
      // router.go();
      return result.data;
    },
  },
};
export default roleStore;
