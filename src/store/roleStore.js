import { normalApi } from '../api/apiService.js';
import router from './../router/router';
import { RESOURCE_ROLE, BASE_URL } from './../api/api.js';
const roleStore = {
  namespaced: true,
  state: {
    role: {
      id: '',
      name: '',
      permissions: [],
    },
    roles: [],
    permissions: [],
  },
  getters: {
    getRolePermission(state) {
      return state.role.permissions;
    },
  },
  mutations: {
    setRole(state, role) {
      state.role = role;
    },
    setNameRole(state, e) {
      state.role.name = e.target.value;
    },
    setNameRoleFromResponse(state, name) {
      state.role.name = name;
    },
    setRoleId(state, id) {
      state.role.id = id;
    },
    setRoles(state, roles) {
      state.roles = roles;
    },
    setPermissions(state, permissions) {
      state.permissions = permissions;
    },
    setRolePermissionsFromResponse(state, permissions) {
      let array = Object.values(permissions);
      state.role.permissions = array;
    },
    setRolePermissions(state, permissions) {
      state.role.permissions = permissions;
    },
    removeAnItem(state, id) {
      state.roles = state.roles.filter(item => item.id !== id);
    },
  },
  actions: {
    async index({ commit }) {
      const result = await normalApi.get(`${RESOURCE_ROLE}`);
      commit('setRoles', result.data);
    },
    async show({ commit }, id) {
      const result = await normalApi.get(`${RESOURCE_ROLE}/${id}`);
      commit('setNameRoleFromResponse', result.data.role.name);
      commit('setRoleId', result.data.role.id);
      commit('setRolePermissions', result.data.rolePermissions);
    },
    async edit({ commit }, id) {
      const result = await normalApi.get(`${RESOURCE_ROLE}/${id}/edit`);
      commit('setNameRoleFromResponse', result.data.role.name);
      commit('setRoleId', result.data.role.id);
      commit('setRolePermissionsFromResponse', result.data.rolePermissions);
      commit('setPermissions', result.data.permissions);
    },
    async create({ commit }) {
      const result = await normalApi.get(`${BASE_URL}/api/role-create`); //THIS IS AN ERROR WHEN BACK_END ROUTER DO NOT CATCH ROLE/CREATE URL
      commit('setPermissions', result.data);
    },
    async update({ commit, state }, permissions) {
      commit('setRolePermissions', permissions);
      const result = await normalApi.put(
        `${RESOURCE_ROLE}/${state.role.id}`,
        state.role,
      );
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
      router.go();
      return result.data;
    },
  },
};
export default roleStore;
