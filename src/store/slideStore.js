import router from './../router/router';
const FormData = require('form-data');
import { normalApi, formDataApi } from '../api/apiService';
import { RESOURCE_SLIDE } from './../api/api.js';
const slideStore = {
  namespaced: true,
  state: {
    slide: {
      nameslide: '',
      urlimg: '',
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
    setFileImg(state, event) {
      state.slide.file_img = event.target.files[0];
      state.slide.urlimg = URL.createObjectURL(state.slide.file_img);
    },
    removeAnItem(state, id) {
      state.slides = state.slides.filter(item => item.id !== id);
    },
  },
  actions: {
    async index({ commit }) {
      const result = await normalApi.get(`${RESOURCE_SLIDE}`);
      commit('setSlides', result.data);
    },
    async destroy({ commit }, id) {
      const result = await normalApi.delete(`${RESOURCE_SLIDE}/${id}`);
      commit('removeAnItem', id);
      return result.data;
    },
    async store({ state }) {
      const form = new FormData();
      form.append('nameSlide', state.slide.nameslide);
      form.append('fileSlide', state.slide.file_img);
      const result = await formDataApi.post(`${RESOURCE_SLIDE}`, form);
      router.go();
      return result.data;
    },
  },
};
export default slideStore;
