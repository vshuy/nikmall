import { normalApi } from '../api/apiService.js';
import VueCookies from 'vue-cookies';
import { RESOURCE_COMMENT_POST } from './../api/api.js';
const commentPostStore = {
  namespaced: true,
  state: {
    new_comment: {
      post_id: '',
      contents: '',
    },
    edit_comment: {
      id: '',
      contents: '',
    },
    user_id: '',
    username: '',
    comments: [],
    edit_status: false,
  },
  mutations: {
    setComments(state, comments) {
      state.comments = comments;
    },
    setPostId(state, post_id) {
      state.new_comment.post_id = post_id;
    },
    setUserId(state, user_id) {
      state.user_id = user_id;
    },
    setUserName(state, username) {
      state.username = username;
    },
    setValueFormNewComment(state, e) {
      state.new_comment.contents = e.target.value;
    },
    setValueFormEditComment(state, e) {
      state.edit_comment.contents = e.target.value;
    },
    setIdCommentEdit(state, id_comment) {
      state.edit_comment.id = id_comment;
    },
    setValueCommentEdit(state, contents) {
      state.edit_comment.contents = contents;
    },
    removeAnItem(state, id) {
      state.comments = state.comments.filter(item => item.id !== id);
    },
    addAnItem(state, id) {
      let anItem = {
        // i don't know why i have to do this but if i using = direct value it will change all data of comments when i change data of sate
        id: id,
        user_id: state.user_id,
        product_id: state.new_comment.post_id,
        contents: state.new_comment.contents,
        name: state.username,
      };
      state.comments.push(anItem);
    },
    updateAComment(state) {
      state.comments = state.comments.map(item => {
        if (item.id === state.edit_comment.id) {
          item.contents = state.edit_comment.contents;
        }
        return item;
      });
      state.edit_status = false;
    },
    setEditCommentStatus(state, status_comment) {
      state.edit_status = status_comment;
    },
  },
  actions: {
    async show({ commit, state }) {
      const result = await normalApi.get(
        `${RESOURCE_COMMENT_POST}/${state.new_comment.post_id}`,
      );
      commit('setComments', result.data);
    },
    async store({ commit, state }) {
      const result = await normalApi.post(
        `${RESOURCE_COMMENT_POST}`,
        state.new_comment,
      );
      commit('addAnItem', result.data);
    },
    async update({ commit, state }) {
      commit('updateAComment');
      const result = await normalApi.put(
        `${RESOURCE_COMMENT_POST}/${state.edit_comment.id}`,
        state.edit_comment,
      );
      return result.data;
    },
    async destroy({ commit }, id) {
      const result = await normalApi.delete(`${RESOURCE_COMMENT_POST}/${id}`);
      commit('removeAnItem', id);
      return result.data;
    },
    async openCommentEditForm({ commit }, item) {
      commit('setIdCommentEdit', item.id);
      commit('setValueCommentEdit', item.contents);
      commit('setEditCommentStatus', true);
    },
    async closeCommentEditForm({ commit }) {
      commit('setEditCommentStatus', false);
    },
    async initStore({ state, commit, dispatch }, post_id) {
      let user_id = await parseInt(VueCookies.get('user_id'));
      let user_name = await VueCookies.get('user_name');
      commit('setPostId', post_id);
      commit('setUserId', user_id);
      commit('setUserName', user_name);
      commit('setEditCommentStatus', false);
      dispatch('show');
      console.log(state);
    },
  },
};
export default commentPostStore;
