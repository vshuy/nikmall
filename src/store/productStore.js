const axios = require('axios');
const FormData = require('form-data');
import router from './../router/router';
import {
  RESOURCE_PRODUCT,
  RESOURCE_CATEGORY,
  RESOURCE_BRAND,
  RESOURCE_RAM,
  RESOURCE_MEMORY,
  RESOURCE_BATTERY,
  RESOURCE_DISPLAY,
  RESOURCE_OS,
} from './../api/api.js';
import { normalApi, formDataApi } from '../api/apiService.js';
const productStore = {
  namespaced: true,
  state: {
    product: {
      id: '',
      name: '',
      category_id: '',
      brand_id: '',
      memory_id: '',
      ram_id: '',
      display_id: '',
      battery_id: '',
      operating_system_id: '',
      link_thumbnail: '',
      cost: '',
      old_cost: '',
      quantity: 0,
      content_post: '',
    },
    categories: [],
    brands: [],
    memories: [],
    rams: [],
    batteries: [],
    display_sizes: [],
    operating_systems: [],
    products: {},
    file_img_to_upload: '',
  },
  mutations: {
    setCategoryId(state, e) {
      state.product.category_id = e.target.value;
    },
    setBrandId(state, e) {
      state.product.brand_id = e.target.value;
    },
    setMemoryId(state, e) {
      state.product.memory_id = e.target.value;
    },
    setRamId(state, e) {
      state.product.ram_id = e.target.value;
    },
    setBatteryId(state, e) {
      state.product.battery_id = e.target.value;
    },
    setDisplayId(state, e) {
      state.product.display_id = e.target.value;
    },
    setOperatingSystemId(state, e) {
      state.product.operating_system_id = e.target.value;
    },
    setName(state, e) {
      state.product.name = e.target.value;
    },
    setContentPost(state, value) {
      state.product.content_post = value;
    },
    setCost(state, e) {
      state.product.cost = e.target.value;
    },
    setOldCost(state, e) {
      state.product.old_cost = e.target.value;
    },
    setQuantity(state, e) {
      state.product.quantity = e.target.value;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setBrands(state, brands) {
      state.brands = brands;
    },
    setRams(state, rams) {
      state.rams = rams;
    },
    setMemories(state, memories) {
      state.memories = memories;
    },
    setBatteries(state, batteries) {
      state.batteries = batteries;
    },
    setDisplays(state, displays) {
      state.display_sizes = displays;
    },
    setOperaSystems(state, operaSystems) {
      state.operating_systems = operaSystems;
    },
    setFileImg(state, event) {
      state.file_img_to_upload = event.target.files[0];
      state.product.link_thumbnail = URL.createObjectURL(
        state.file_img_to_upload,
      );
    },
    removeAnItem(state, id) {
      state.products = state.products.filter(item => item.id !== id);
    },
  },
  actions: {
    async indexPage({ commit }, page) {
      if (typeof page === 'undefined') {
        page = 1;
      }
      const result = await normalApi.get(`${RESOURCE_PRODUCT}/pg?page=${page}`);
      commit('setProducts', result.data);
    },
    async index({ commit }) {
      const result = await normalApi.get(`${RESOURCE_PRODUCT}`);
      commit('setProducts', result.data);
    },
    async show({ commit }, id) {
      const result = await axios.get(`${RESOURCE_PRODUCT}/${id}`);
      commit('setProduct', result.data);
    },
    async update({ state }) {
      const result = await normalApi.put(
        `${RESOURCE_PRODUCT}/${state.product.id}`,
        state.product,
      );
      router.go();
      return result.data;
    },
    async store({ state }) {
      const form = new FormData();
      form.append('file_img_product', state.file_img_to_upload);
      form.append('product_data', JSON.stringify(state.product));
      const result = await formDataApi.post(`${RESOURCE_PRODUCT}`, form);
      router.go();
      return result.data;
    },
    async destroy({ commit }, id) {
      const result = await normalApi.delete(`${RESOURCE_PRODUCT}/${id}`);
      commit('removeAnItem', id);
      return result.data;
    },
    async initStore({ commit }) {
      const resultCategory = await normalApi.get(`${RESOURCE_CATEGORY}`);
      const resultRam = await normalApi.get(`${RESOURCE_RAM}`);
      const resultBrand = await normalApi.get(`${RESOURCE_BRAND}`);
      const resultMemory = await normalApi.get(`${RESOURCE_MEMORY}`);
      const resultBattery = await normalApi.get(`${RESOURCE_BATTERY}`);
      const resultDisplay = await normalApi.get(`${RESOURCE_DISPLAY}`);
      const resultOs = await normalApi.get(`${RESOURCE_OS}`);
      commit('setCategories', resultCategory.data);
      commit('setBrands', resultBrand.data);
      commit('setMemories', resultMemory.data);
      commit('setRams', resultRam.data);
      commit('setBatteries', resultBattery.data);
      commit('setDisplays', resultDisplay.data);
      commit('setOperaSystems', resultOs.data);
    },
  },
};
export default productStore;
