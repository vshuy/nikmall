import { normalApi } from '../api/apiService.js';
import router from './../router/router';
import { RESOURCE_PERMISSION } from './../api/api.js';
const permissionStore = {
  namespaced: true,
  state: {
    permission: {
      id: '',
      name: '',
    },
    permissions: [],
  },
  mutations: {
    setPermission(state, permission) {
      state.permission = permission;
    },
    setPermissions(state, permissions) {
      state.permissions = permissions;
    },
    setName(state, e) {
      state.permission.name = e.target.value;
    },
    removeAnItem(state, id) {
      state.permissions = state.permissions.filter(item => item.id !== id);
    },
  },
  actions: {
    async index({ commit }) {
      const result = await normalApi.get(`${RESOURCE_PERMISSION}`);
      commit('setPermissions', result.data);
    },
    async show({ commit }, id) {
      const result = await normalApi.get(`${RESOURCE_PERMISSION}/${id}`);
      commit('setPermission', result.data);
    },
    async update({ state }) {
      const result = await normalApi.put(
        `${RESOURCE_PERMISSION}/${state.permission.id}`,
        state.permission,
      );
      router.push('/permission-index');
      return result.data;
    },
    async destroy({ commit }, id) {
      const result = await normalApi.delete(`${RESOURCE_PERMISSION}/${id}`);
      commit('removeAnItem', id);
      return result.data;
    },
    async store({ state, dispatch }) {
      const result = await normalApi.post(
        `${RESOURCE_PERMISSION}`,
        state.permission,
      );
      dispatch('index');
      return result.data;
    },
  },
};
export default permissionStore;
