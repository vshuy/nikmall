import { normalApi } from '../api/apiService.js';
import router from './../router/router';
import { RESOURCE_ASSIGN_ROLE } from './../api/api.js';
const assignRoleStore = {
  namespaced: true,
  state: {
    user: {
      id: '',
      name: '',
      email: '',
      role_name: [],
    },
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
    setRoleName(state, e) {
      state.user.role_name = e.target.value;
    },
    setUser(state, user) {
      state.user.id = user.id;
      state.user.name = user.name;
      state.user.email = user.email;
      state.user.role_name[0] = user.roles[0].name;
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
    async update({ state }) {
      const result = await normalApi.put(
        `${RESOURCE_ASSIGN_ROLE}/${state.user.id}`,
        state.user,
      );
      router.push('/assign-role-index');
      return result.data;
    },
    async edit({ commit, state }, id) {
      const result = await normalApi.get(`${RESOURCE_ASSIGN_ROLE}/${id}/edit`);
      commit('setRoles', result.data.roles);
      commit('setUser', result.data.user);
      console.log(state);
    },
    async destroy({ commit }, id) {
      const result = await normalApi.delete(`${RESOURCE_ASSIGN_ROLE}/${id}`);
      commit('removeAnItem', id);
      return result.data;
    },
    async store({ state }) {
      const result = await normalApi.post(
        `${RESOURCE_ASSIGN_ROLE}`,
        state.user,
      );
      router.go();
      return result.data;
    },
  },
};
export default assignRoleStore;
