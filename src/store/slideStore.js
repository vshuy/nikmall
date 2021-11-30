const axios = require('axios');
import VueCookies from 'vue-cookies';
import router from './../router/router';
const FormData = require('form-data');
import { RESOURCE_SLIDE } from './../api/api.js';
const slideStore = {
  namespaced: true,
  state: {
    slide: {
      nameslide: '',
      file_img: '',
    },
    slides: [],
  },
  mutations: {
    setSlide(state, slide) {
      state.slide = slide;
    },
    setSlides(state, slides) {
      state.slides = slides;
    },
    setName(state, e) {
      state.slide.nameslide = e.target.value;
    },
    setFileImg(state) {
      state.slide.file_img = this.$refs.file.files[0];
    },
    removeAnItem(state, id) {
      state.slides = state.slides.filter(item => item.id !== id);
    },
  },
  actions: {
    async index({ commit }) {
      const result = await axios.get(`${RESOURCE_SLIDE}`, {
        headers: {
          Authorization: VueCookies.get('token'),
        },
      });
      commit('setSlides', result.data);
    },
    async destroy({ commit }, id) {
      const result = await axios.delete(`${RESOURCE_SLIDE}/${id}`, {
        headers: {
          Authorization: VueCookies.get('token'),
        },
      });
      commit('removeAnItem', id);
      return result.data;
    },
    async store({ state }) {
      const form = new FormData();
      form.append('nameSlide', state.slide.nameslide);
      form.append('fileSlide', state.slide.file_img);
      const result = await axios.post(`${RESOURCE_SLIDE}`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: VueCookies.get('token'),
        },
      });
      router.go();
      return result.data;
    },
  },
};
export default slideStore;
