<template>
  <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="table-responsive">
      <h2>Quản lý slide</h2>
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Xóa danh mục</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in slides" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>
              <u v-on:click="deleteSlideById(item.id)">Xóa danh mục này</u>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<script>
import { RESOURCE_SLIDE } from './../../api/api';

const axios = require('axios');

export default {
  name: 'SlideManage',
  props: {
    title: String,
  },
  data() {
    return {
      slides: [],
    };
  },
  metaInfo: {
    title: 'Slide overview',
    script: [],
  },
  methods: {
    async getListImg() {
      const result = await axios.get(`${RESOURCE_SLIDE}`, {
        headers: {
          Authorization: this.$cookies.get('token'),
        },
      });
      return result.data;
    },
    async deleteSlideById(id) {
      console.log('Info log: ~ id', id);
      const result = await axios.delete(`${RESOURCE_SLIDE}/${id}`, {
        headers: {
          Authorization: this.$cookies.get('token'),
        },
      });
      this.slides = this.slides.filter((item) => item.id !== id);
      return result.data;
    },
    async getData() {
      this.slides = await this.getListImg();
    },
  },
  setup() {
    console.log('runnning in setup method');
  },
  mounted() {
    this.getData();
  },
};
</script>
<style>
/* @import './../assets/css/dashboard.css'; */
</style>
