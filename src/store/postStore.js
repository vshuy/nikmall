import { formDataApi, normalApi } from '../api/apiService';
const FormData = require('form-data');
import router from './../router/router';
import { RESOURCE_POST } from './../api/api.js';
import { RESOURCE_POST_CATEGORY } from './../api/api.js';
const postStore = {
  namespaced: true,
  state: {
    post: {
      id: '',
      category_id: '',
      name: '',
      link_thumbnail: '',
      content_post: '',
      views: 0,
      likes: 0,
    },
    file_img_to_upload: '',
    categories: [],
    posts: [],
  },
  mutations: {
    setCategoryId(state, e) {
      state.post.category_id = e.target.value;
    },
    setName(state, e) {
      state.post.name = e.target.value;
    },
    setContentPost(state, value) {
      state.post.content_post = value;
    },
    setFileImg(state, event) {
      state.file_img_to_upload = event.target.files[0];
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setPost(state, post) {
      state.post = post;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    removeAnItem(state, id) {
      state.posts = state.post.filter(item => item.id !== id);
    },
  },
  actions: {
    async index({ commit }) {
      const result = await normalApi.get(`${RESOURCE_POST}`);
      commit('setPosts', result.data);
    },
    async show({ commit }, id) {
      const result = await normalApi.get(`${RESOURCE_POST}/${id}`);
      commit('setPost', result.data);
    },
    async update({ state }, id) {
      const result = await normalApi.put(`${RESOURCE_POST}/${id}`, state.category);
      router.go();
      return result.data;
    },
    async destroy({ commit }, id) {
      const result = await normalApi.delete(`${RESOURCE_POST}/${id}`);
      commit('removeAnItem', id);
      return result.data;
    },
    async store({ state }) {
      const form = new FormData();
      form.append('file_img_post', state.file_img_to_upload);
      form.append('post_data', JSON.stringify(state.post));
      const result = await formDataApi.post(`${RESOURCE_POST}`, form);
      return result.data;
    },
    async initStore({ commit }) {
      const result = await normalApi.get(`${RESOURCE_POST_CATEGORY}`);
      commit('setCategories', result.data);
    },
  },
};
export default postStore;
